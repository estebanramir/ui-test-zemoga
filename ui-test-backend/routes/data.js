var express = require('express');
var router = express.Router();


const votingInfo ={
  "data": [
      {
          "name": "Kanye West",
          "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
          "category": "entertainment",
          "picture": "https://s3-alpha-sig.figma.com/img/fe63/1d57/1b70a986034537dee3a98e53b4e5362d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FHR-~S5Qh~0xBT6XeXKnePmjDNGxznBqw2aT-VtR~xRj9IXvGlDiihTWROw04iNUxwq4dbNykO3Xyop4yOEg3nO1HmnYLnP7bNjLlbdWZw4920KYZJtnov-kq84Dmw-Q9H0p0bI4BJ~r51RvH4ccjlevO00VBmxCutGLY3-djUe2bWlsDyMi84lTFcf1hlLpWP05L9Hrj9gnDH~SYTOnNSZL7TG6njTRWu8uB~MQAC3q7C49Zuob-m7s9UY6wN8h2WYrQslLGCOxTnLXqX~Gast1GHs7QpvwTpe2csqXzL8qAK-6-I6iiHeffjtlfqW9MXGWkQDb5JWGL9mnKUlxbQ__",
          "lastUpdated": "2020-03-10T23:08:57.892Z",
          "votes": {
              "positive": 23,
              "negative": 36
          }
      },
      {
          "name": "Mark Zuckerberg",
          "description": "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
          "category": "business",
          "picture": "https://s3-alpha-sig.figma.com/img/72b7/66de/d5d7166ddb74dd60e14cd42ea4457fcc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqeK~ub-7aPcYQm4MYLpkHSQ7EIJWoyC56v-SMozNTWAhSR~rd9oWxezY1Lw-6~UUv~whVU5uYEbVDHmt6FiUl8TNZpiDPxQPGJv2wEFWumgTdsrP6xyqDI7OfykPZBzJ-JiWcQi3y6ld5ETkz1C4dYXzKFqh-1tGuSFPEX93Xq8fkcWhAyDwyrD~0krZD5SDpJ054PyEdCIgguqjpjfSkvFnWl4r8c8kTleZPQUHWbx~GJhJ~ZbrV1khL2BEeQFeuYbJrXnkrR1ZQDtBtCOsqLtvH5WmFpoql7NzhneyD-YjlRzQ8h1uIuh32OSa1qx~qUo0NRsuN4FKR2pjQzi2A__",
          "lastUpdated": "2021-02-14T23:10:19.134Z",
          "votes": {
              "positive": 418,
              "negative": 324
          },

      },
      {
          "name": "Cristina Fernández de Kirchner",
          "description": "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
          "category": "politics",
          "picture": "https://s3-alpha-sig.figma.com/img/2fd6/8f28/bc83221593b7348787a06d032a2a6dbb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KugfYukS-XEeE56aqRG3yqVQ-di~Hvph6BMBgXaouu-hW2I3gtCYXrv3lrs5LihYIGrnBsnojIZtbFooj7nTLA4N-4z5Y4jszwBvQSp7HWb-D4oVSwoSUW5GPdLJ8bcSwtk-MDgVhVI4GqDo3l26r3yq45lCOtNLBl-lECSKAz5MflST9CSHHLbp2OsDgG6SwZYV9R-Qd5GQeXjnoFMks74U6kQMgdnhp2BKNJI9LORcOixb9B8ihQizqAMlPl9YtKslU3FiSV~zSQ-yePwMs-VnKUzRWhhZQggoXYVUuVs8M0P5TvgSlX7SU-rLAHVSJTjCEhbMwuQmGspxIfYVhA__",
          "lastUpdated": "2020-12-10T23:41:07.120Z",
          "votes": {
              "positive": 45,
              "negative": 97
          }
      },
      {
          "name": "Malala Yousafzai",
          "description": "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
          "category": "politics",
          "picture": "https://s3-alpha-sig.figma.com/img/1629/5a48/017f8d8f6063e2989538f27f849b080f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxUywXOwbGkjlt4G1cWg7CMPubSIm2DcLrGIrTqQx7AdQJeA9rYis0E0u0dBD3Tlog80dQtRBjqM1qW1JnQzO~iWr6TprCJtFtwpLwDu5E5MqdR9E1Y0qqKWbmqAp6CHfyAPfXNwyi1Bbp-Yf8fqhzZbk~76xf9aEYwh5~bjkAXEqIUVg0L~ygEHgBOqlUgI0Vk3553CQBpKZUuCFSGN5IXArY2sarrr2GmZ5AyzImsMs8IjMw6ZrWTbZrG33lj3IsSvSQkUUYY7dJ56DRxGqK7RdJgYZd5kd0BhGS8peAUeHY2WXgYwtSUFmecFgyMbUnGFOqsOPfIdC-NsCzbHnw__",
          "lastUpdated": "2020-12-10T23:41:07.120Z",
          "votes": {
              "positive": 18,
              "negative": 3
          }
      },
      {
          "name": "Elon Musk",
          "description": "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
          "category": "business",
          "picture": "https://s3-alpha-sig.figma.com/img/ec8b/dfb2/c784fb561ef2cb3e170851d33c679161?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwavI~1BsOQ-dmmVGDTV~kHzH-hDiyMsNmpNySbfiond1UvJMFWWnA3DavbgBSjzPhkCXcZfKJpqsLXAkdc-R8Mbsx5xET7TF1zp5GVe2bHHWFOvdnEJPgwpf5Mb5eAXq5RvRuRc2J9HnJnwHIylCb8~w23Z7ETLYgJAKfA3h6ntT-gYOebybtaJA3p8E7AFuEFhXRfUEZzsO0uP2-9u7IuDSD1MAjPovhZoIHGZ1AaExGwsuzCUQHfjeUSL1Ugagm2PUfIc9VKl6rybA33L2lVYR3OiFkS~P9en8kr4tOayg0U6nhQFj3RGWgCmY3f2YkXnLtXxAJpnwzUOvuUJpw__",
          "lastUpdated": "2020-12-20T23:43:38.041Z",
          "votes": {
              "positive": 1237,
              "negative": 894
          }
      },
      {
          "name": "Greta Thumberg",
          "description": "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
          "category": "environment",
          "picture": "https://s3-alpha-sig.figma.com/img/b9ad/6194/1abd954cb54588298afc2b6c9a116504?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjVpiV1d1SPKDrHKMP3gd-BWtOO~Ifk6rY9HeKnccfvoFFMR6hqvWXETcaVyW2ENJbbHzXGz4dpp90qsKw3YsKXlOh9HixRtdPjWcVWrg-1Hg9DFvlFb9iPRGRmddfucFdk9QwUnrow-VHxkdUA2Bl263pCY9BTGdDvdWGjEiXc~urqFVLoPnVyE6RRXAyaXoYfxgAAtKSfIGJxEriec2CV8tY0u8NqvUgYtPRxqV-K20h1r8IQJuPER2IbkvO9SeWIo6-7zD2tQ5Eu3UulCnSesv8mh5BhkCiuYKeo4jyZFUcWVb8OnBoFH-5cAGTkMk-rIFaZaGkFwIj4svuyWGA__",
          "lastUpdated": "2023-12-26T23:44:50.326Z",
          "votes": {
              "positive": 118,
              "negative": 45
          }
      }
  ]
}

const actualVotingInfo = {"data": {
  "name": "Pope Francis",
  "description": "He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff?.",
  "category": "entertainment",
  "picture": "kanye.png",
  "lastUpdated": "2020-03-10T23:08:57.892Z",
  "votes": {
      "positive": 23,
      "negative": 36
  },
  "daysRemaining": '22'
}}
router.get('/', function(req, res, next) {
  res.json(votingInfo);
});
router.patch('/', function(req, res, next) {
  const {name, vote} = req.body;
  const candidate = votingInfo.data.find(c => c.name === name);
  if (vote === 1) {
    candidate.votes.positive++;
  } else {
    candidate.votes.negative++;
  }
  res.json(votingInfo);
});
router.get('/actual', function(req, res, next) {
  res.json(actualVotingInfo);
});
router.patch('/actual', function(req, res, next) {
  const {vote} = req.body;
  if (vote === 'positive') {
    actualVotingInfo.votes.positive++;
  } else {
    actualVotingInfo.votes.negative++;
  }
  res.json(actualVotingInfo);
})

module.exports = router;
