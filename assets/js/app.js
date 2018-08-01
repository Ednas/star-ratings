function randonum() {
    let rando = Math.floor(Math.random() * 5) + 1;
    console.log(rando);
    return rando;
};
//Hardcoded ratings since I'm not setting up a database for this
const ratings = {
    edna: randonum(),
    brandy: randonum(),
    mac: randonum(),
    davie: randonum(),
    grendel: randonum()
};

const starTotal = 5;

//Creates a loop that loops through each rating in ratings and creates the variable rating
for (const rating in ratings) {
    // Calculates the Star % for each star rating[i] divides by the starTotal(5) and multiplies by 100 to create a percent
    const starPercentage = (ratings[rating] / starTotal) * 100;
    // Rounds up the star percentage to the next 10th
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    // for the rating selects the stars class and sets the width to the Star percentage rounded
    document.querySelector(`.${rating} .stars`).style.width = starPercentageRounded;
    // This will add the whole star ontop of the star outline and fill it in
    $('.stars').toggleClass('fas fa-star');
    $('.stars').append('<i class="fas fa-star"></i>')

}