import { ADD_SELECTED_ANSWER,SUM_TOTAL_SCORE } from "../ActionTypes/ActionTypes"

const initialState = {
  questions: [
    {
      id:1,
      title:"Умумий соғлигингиз ҳолатини қандай бахолайсиз? ",
      type: 'single',
      options: [
              {
                  title: "Аъло даражада", 
                  score: 1, 
                  id:11,
                  subOptions:  null
              },
              {
                  title: "Жуда яхши", 
                  score: 2, 
                  id: 12,
                  subOptions:  null
              },
              {
                  title: "Яхши", 
                  score: 3, 
                  id: 13,
                  subOptions:  null
              },
              {
                  title: "Коникарли", 
                  score: 4, 
                  id: 14,
                  subOptions:  null
              },
              {
                  title: "Ёмон", 
                  score: 5, 
                  id: 15,
                  subOptions:  null
              },
          ]
  },
  {
    id: 2,
    type: 'collection',
    title: 'Кейинги саволлар сизнинг одатий кунингизда дуч келадиган жисмоний юкламалар билан боғлиқ. Хозирги вақтда сизнинг соғлиғингиз ҳолати қуйида келтирилган жисмоний юкламаларни бажаришда қийинчилик туғдирадими (чегараланганми)? Агар шундай бўлса қай даражада намоён бўлади?',
    optionTitles: [
      {
        id: 21,
        text: 'Ха, яққол чегараланган'
    },
    {
        id: 22,
        text: 'Ха бироз чегараланган'
    },
    {
        id: 23,
        text: 'Йўк, умуман чегараланмаган'
    },
    ],
    questions: [
      {
        title: 'Югуриш, оғир юк кўтариш, спортнинг куч сарф этувчи турлари билан шуғулланиш каби оғир жисмоний юкламалар',
        id: 211,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Столни суриш, чангюткич билан ишлаш, мева ва резаворларни териш каби ўртача жисмоний юкламалар',
        id: 212,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Махсулотлар солинган сумкани кўтариш ёки кўтариб юриш',
        id: 213,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Бир қанча зинапоядан пиёда кўтарилиш',
        id: 214,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Битта зинапоядан пиёда кўтарилиш',
        id: 215,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Олдинга энгашиш, тиззада туриш, чўккалаб ўтириш',
        id: 216,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Бир километрдан ортиқ масофага юриш',
        id: 217,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: '200 метрдан ортиқ масофага юриш',
        id: 218,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: '100 метр масофага юриш',
        id: 219,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
      {
        title: 'Мустақил равишда ювиниш ва кийиниш',
        id: 220,
        options: [
          {
            id: 2111,
            score: 1
          },
          {
            id: 2112,
            score: 2
          },
          {
            id: 2113,
            score: 3
          },
        ]
      },
    ]
  }
  ],
  selectedOptions: [],
  totalScore: 0
}


const sumTotalScore = (selectedOptions) => {
  let sum = 0;
  selectedOptions.forEach(selectedOption => {
    sum += selectedOption.score
  })
  return sum
}

const removeSelectedElement = (selectedAnswers, removingId) => {
  return selectedAnswers.filter(item => item.questionId !== removingId)
}

const questionsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_SELECTED_ANSWER: 
    return {
      ...state,
      selectedOptions: !state.selectedOptions.length ? [
        payload
      ]
      : [...removeSelectedElement(state.selectedOptions, payload.questionId), payload],
    }
    case SUM_TOTAL_SCORE: 
    return {
      ...state,
      totalScore: sumTotalScore(state.selectedOptions)

    }
    default: return state
  }
}

export default questionsReducer


/**
 * questionId,
 * optionId,
 * score,
 * title
 */


