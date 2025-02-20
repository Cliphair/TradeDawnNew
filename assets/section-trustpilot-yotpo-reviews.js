document.addEventListener('DOMContentLoaded', function () {
  updateTrustpilotRating();
  updateYotpoRating();
});

async function getTrustpilotReviewScore() {
  const url = `https://api.trustpilot.com/v1/business-units/find?name=cliphair.co.uk&apikey=ZQkKMT68qUbje3CdgpoUD83QRwlAybrc`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.score.trustScore && data.numberOfReviews.usedForTrustScoreCalculation) {
      return {
        averageScore: data.score.trustScore,
        totalReviews: data.numberOfReviews.usedForTrustScoreCalculation,
      };
    } else {
      throw new Error('Missing infromation from Truspilot API');
    }
  } catch (error) {
    console.error('Error fetching Truspilot site review score:', error);
    return null;
  }
}

function updateTrustpilotRating() {
  let stars = Array.from(document.getElementsByClassName('trustpilot-star'));
  let score = document.querySelector('.trustpilot-score');
  let fullStarsLastIndex = null;
  let halfStarsLastIndex = null;

  getTrustpilotReviewScore().then((data) => {
    if (data) {
      score.innerText = data.averageScore;
      fullStarsLastIndex = Math.trunc(data.averageScore);
      if (fullStarsLastIndex < 5 && data.averageScore - fullStarsLastIndex != 0) {
        halfStarsLastIndex = fullStarsLastIndex + 1;
      }

      stars.forEach((element, index) => {
        if (index + 1 <= fullStarsLastIndex) {
          element.classList.add('full');
        }
        if (halfStarsLastIndex && index + 1 == halfStarsLastIndex) {
          element.classList.add('half');
        }
      });
    }
  });
}

function updateYotpoRating() {
  let stars = Array.from(document.getElementsByClassName('yotpo-star'));
  let score = document.querySelector('.yotpo-score');
  let fullStarsLastIndex = null;
  let halfStarsLastIndex = null;

  getYotpoReviewScore().then((data) => {
    if (data) {
      score.innerText = data.averageScore;
      fullStarsLastIndex = Math.trunc(data.averageScore);
      if (fullStarsLastIndex < 5 && data.averageScore - fullStarsLastIndex != 0) {
        halfStarsLastIndex = fullStarsLastIndex + 1;
      }

      stars.forEach((element, index) => {
        if (index + 1 <= fullStarsLastIndex) {
          element.classList.add('full');
        }
        if (halfStarsLastIndex && index + 1 == halfStarsLastIndex) {
          element.classList.add('half');
        }
      });
    }
  });
}

async function getYotpoReviewScore() {
  const url = `https://api.yotpo.com/products/aMREVTSJZfbqjVqxLsKxYMHAmpb94LftONho8TDm/yotpo_site_reviews/bottomline`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status.code === 200) {
      return {
        averageScore: data.response.bottomline.average_score,
        totalReviews: data.response.bottomline.total_reviews,
      };
    } else {
      throw new Error('Invalid response from Yotpo API');
    }
  } catch (error) {
    console.error('Error fetching Yotpo site review score:', error);
    return null;
  }
}
