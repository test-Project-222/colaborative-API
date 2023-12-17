function Collaborative(distances_instance){
	this.distances = distances_instance

}

Collaborative.prototype.getSimiliarItems = function(people, person, top_matches_no, similarity_func, distance){
	var i,
		len = people.length,
		similar_people = []


		top_matches_no  = top_matches_no || 5
		similarity_func = similarity_func || this.simPearson
		distance        = distance || 'euclidean'

	if (typeof distance === 'string') {
		distance = this.distances[distance]
	}// if

	for(i = 0; i < len; i++){

		if (people[i].getId() !== person.getId()){
			similar_people.push({similarity_score: similarity_func.call(this,person,people[i],distance) , person: people[i] })
		}// if

	}
	similar_people.sort(function(a,b){ return b.similarity_score - a.similarity_score})

	return similar_people.slice(0,top_matches_no)
}

Collaborative.prototype.getRecommendations = function(people, person, recommendations_no, similarity_func, distance){
	var i,
		j,
		len = people.length,
		other_person_rating_list_len,
		similarity,
		total_similarities = {},
		similar_items = [],
		similar_item,
		other_person_rating_list

	recommendations_no = recommendations_no || 5
	similarity_func    = similarity_func || this.simPearson
	distance           = distance || 'euclidean'


	for(i = 0; i < len; i++){
		similarity = 0

		if (people[i].getId() !== person.getId()){

			similarity = similarity_func.call(this,person,people[i],distance)
		}// if

		if (similarity > 0){
			other_person_rating_list     = people[i].getRatingList()
			other_person_rating_list_len = other_person_rating_list.length

			for(j = 0; j < other_person_rating_list_len; j++){

				if (person.getRating(other_person_rating_list[j]) < 0){

					
					if (total_similarities.hasOwnProperty(other_person_rating_list[j].getId()) ){

						total_similarities[other_person_rating_list[j].getId()].total += other_person_rating_list[j].rating * similarity
						total_similarities[other_person_rating_list[j].getId()].sum_of_similarities += similarity

					}
					else{
						total_similarities[other_person_rating_list[j].getId()] = { total : 0, sum_of_similarities: 0}
					}// if

				}
			}// for
		}// if
	}// for

	for(similar_item in total_similarities){
		similar_items.push({
								rating: total_similarities[similar_item].total / total_similarities[similar_item].sum_of_similarities,
								id: similar_item,
								
		})
	}// for

	// sorting in DESCENDING order
	return similar_items.sort(function(a,b){ return b.rating - a.rating})

}

Collaborative.prototype.getCurrentOtherPersonRatingAndRatingLists = function(options){
	var person1_rating_list = options.person1.getRatingList(),
		person2_rating_list = options.person2.getRatingList(),
		len = Math.max(person1_rating_list.length, person2_rating_list.length)

	if (person1_rating_list.length === len){
		options.current_person = options.person1
		options.current_person_rating_list = person1_rating_list
		options.other_person = options.person2
		options.other_person_rating_list = person2_rating_list
	}
	else{
		options.current_person = options.person2
		options.current_person_rating_list = person2_rating_list
		options.other_person = options.person1
		options.other_person_rating_list = person1_rating_list
	}// else
}


Collaborative.prototype.simDistance = function(person1, person2, distance){
	// get the list of shared items
	var i,
		other_person_rating_index,
		distances = 0,
		len,
		current_person,
		current_person_rating_list,
		other_person,
		other_person_rating_list,
		options

	options = {person1: person1, 
				person2: person2, 
				current_person: current_person,
				current_person_rating_list: current_person_rating_list,
				other_person: other_person,
				other_person_rating_list: other_person_rating_list}

	this.getCurrentOtherPersonRatingAndRatingLists(options)
	current_person_rating_list = options.current_person_rating_list
	other_person               = options.other_person
	other_person_rating_list   = options.other_person_rating_list

	len = current_person_rating_list.length

	distance       = distance || 'euclidean'

	if (typeof distance === 'string') {
		distance = this.distances[distance]
	}// if

	for(i = 0; i < len; i++){

		other_person_rating_index = other_person.getRating(current_person_rating_list[i])
		if (other_person_rating_index >= 0){
			distances += distance([other_person_rating_list[other_person_rating_index].rating], [current_person_rating_list[i].rating], true) 
		}// if
	}// for

	if (distances){
		return 1 / (1 + Math.sqrt(distances)) // <== SIMILARITY SCORE 
	}// if
	return 0
}

Collaborative.prototype.simPearson = function(person1, person2, distance){
	var	i,
		other_person_rating_index,
		similiarity_vector = [],
		sum1 = 0,
		sum2 = 0,
		sum1_sq = 0,
		sum2_sq = 0,
		sum_prod = 0,
		nom,
		denom,
		len,
		current_person,
		current_person_rating_list,
		other_person,
		other_person_rating_list,
		options

	distance = distance || null 
	options = {person1: person1, 
				person2: person2, 
				current_person: current_person,
				current_person_rating_list: current_person_rating_list,
				other_person: other_person,
				other_person_rating_list: other_person_rating_list}

	this.getCurrentOtherPersonRatingAndRatingLists(options)
	current_person_rating_list = options.current_person_rating_list
	other_person               = options.other_person
	other_person_rating_list   = options.other_person_rating_list

	len = current_person_rating_list.length
	
	for(i = 0; i < len; i++){

		other_person_rating_index = other_person.getRating(current_person_rating_list[i])
		if (other_person_rating_index >= 0){
			similiarity_vector.push({current: i, other: other_person_rating_index})
		}// if
	}// for

	len = similiarity_vector.length

	if(len === 0){ return 0} // no common ratings => dissimilar


	for(i = 0; i < len; i++){

		// add up all the preferences
		sum1     += this.distances.manhattan([current_person_rating_list[similiarity_vector[i].current].rating], [0])
		sum2     += this.distances.manhattan([other_person_rating_list[similiarity_vector[i].other].rating], [0])
		
		
		// sum up the squares
		sum1_sq  += this.distances.euclidean([current_person_rating_list[similiarity_vector[i].current].rating], [0], true)
		sum2_sq  += this.distances.euclidean([other_person_rating_list[similiarity_vector[i].other].rating], [0], true)
		
		// summing the products
		sum_prod += current_person_rating_list[similiarity_vector[i].current].rating * other_person_rating_list[similiarity_vector[i].other].rating
	}


	nom   = sum_prod - ( sum1 * sum2 / len)
	denom = Math.sqrt( ( sum1_sq - Math.pow(sum1,2) / len ) * ( sum2_sq - Math.pow(sum2,2) / len ) )

	return denom === 0? 0 : nom / denom
		

	
}


module.exports = Collaborative