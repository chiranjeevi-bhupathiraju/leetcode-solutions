/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sortedSeats = seats.sort((a,b)=>a-b)
    let sortStudents = students.sort((a,b)=>a-b)

    let res = 0
    for(i=0;i<students.length;i++){
        res += Math.abs(sortedSeats[i]-sortStudents[i])
    }

    return res

};