use mongodata
db.re_sentence_extractions.aggregate([
  {"$group" : {
    "_id" : {
      "cited_paper" : "$cited_paper"
    },
    "extractions": {
      "$push" : "$extraction"
    }
  }}
])