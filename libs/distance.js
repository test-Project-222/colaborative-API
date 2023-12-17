var Distance = function(){}

Distance.prototype = {

  euclidean: function(v1, v2, power) {
      var total = 0,
          i
      for (i = 0; i < v1.length; i++) {
         total += Math.pow(v2[i] - v1[i], 2)
      }
      return power ? total :  Math.sqrt(total)
   },
   manhattan: function(v1, v2) {
     var total = 0,
         i


     for (i = 0; i < v1.length;  i++) {
        total += Math.abs(v2[i] - v1[i])
     }
     return total
   },
  haversine: function(point_a,point_b){
    var R     = 6367.5, // the earth's radius
        dLat  = (point_a[0] - point_b[0]) * Math.PI/180,
        dLong = (point_a[1] - point_b[1]) * Math.PI/180,
        lat1  = point_a[0] * Math.PI/180,
        lat2  = point_b[0] * Math.PI/180,
        a     = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLong/2) * Math.sin(dLong/2) * Math.cos(lat1) * Math.cos(lat2),
        c     = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)),
        d     = R*c;
    return d;
  },
  tanimoto: function(v1, v2, power) {
      var c1 = 0,
          c2 = 0,
          shared = 0,
          i
      power = power || 2

      
      for (i = 0; i < v1.length; i++) {

        if (v1[i] !== 0){ c1++} // # in v1
        if (v2[i] !== 0){ c2++} // #in v2
        if (v1[i] !== 0 && v2[i] !== 0) { shared++} // in both
      }
      return 1.0 - ( Math.float(shared) / ( c1 + c2 - shared))
   },
   max: function(v1, v2) {
     var max = 0,
         i

     for (i = 0; i < v1.length; i++) {
        max = Math.max(max , Math.abs(v2[i] - v1[i]))
     }
     return max
   }
}

if (module && module.exports)
module.exports = Distance