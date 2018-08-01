//Hardcoded ratings since I'm not setting up a database for this
const ratings = {
    edna: 2.8,
    brandy: 3.3,
    mac: 1.9,
    davie: 4.3,
    grendel: 4.74
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
    $('.stars').toggleClass('fas fa-star');
    $('.stars').append('<i class="fas fa-star"></i>')

}