import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      // localstorage 사용을 하지 않으므로 현재 로그인 한 정보를 now_user 에 저장
      now_user: {},
      // 회원가입 한 유저 목록 저장
      user: { s: { email_id: 's', nickname: 'hello', pwd: 's' } },
      // 문제 list 에서 문제 보기 클릭 시 save_data 에서 해당 문제집 정보를 가져와 담는다
      load_data: '',
      // 저장된 문제집 데이터
      save_data: [{
        problem_name: '리본 수학 (test-1)',
        complete_time: '2021-5-04',
        nickname: '테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '다본 수학 (test-1)',
        complete_time: '2021-5-03',
        nickname: 'ㅇㅇ',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '니본 수학 (test-1)',
        complete_time: '2021-3-24',
        nickname: 'hello',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '리본 수학 (test-1)',
        complete_time: '2021-7-02',
        nickname: '테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '(test-1)',
        complete_time: '2021-5-04',
        nickname: '!테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '비본 수학 (test-1)',
        complete_time: '2022-5-04',
        nickname: '테스트7',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '미본 수학 (test-1)',
        complete_time: '2010-6-20',
        nickname: 'A테스트1',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '기본 수학 (test-1)',
        complete_time: '2012-10-01',
        nickname: '테스트12',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      },
      {
        problem_name: '기본 수학 (test-2)',
        complete_time: '2022-6-24',
        nickname: '3테스트',
        list: [
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          },
          {
            title: '삼각형의 3각의 합은 몇도인가?',
            val: 1,
            answer: 2,
            choice: [
              {
                txt: '220도'
              },
              {
                txt: '540도'
              },
              {
                txt: '180도'
              },
              {
                txt: '360도'
              }
            ]
          },
          {
            title: '1 부터 10 까지의 합은?',
            val: 2,
            answer: 0,
            choice: [
              {
                txt: '55'
              },
              {
                txt: '23'
              },
              {
                txt: '38'
              }
            ]
          },
          {
            title: '3 + 3 * 3 / 2',
            val: 3,
            answer: 2,
            choice: [
              {
                txt: '9'
              },
              {
                txt: '6'
              },
              {
                txt: '7.5'
              }
            ]
          },
          {
            title: '10 과 15의 최소공배수는?',
            val: 4,
            answer: 2,
            choice: [
              {
                txt: '5'
              },
              {
                txt: '10'
              },
              {
                txt: '30'
              },
              {
                txt: '150'
              }
            ]
          },
          {
            title: '테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다 테스트 질문입니다 정답은 2번입니다',
            val: 5,
            answer: 1,
            choice: [
              {
                txt: '가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하'
              },
              {
                txt: '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890'
              },
              {
                txt: 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz'
              }
            ]
          },
          {
            title: '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트',
            val: 6,
            answer: 2,
            choice: [
              {
                txt: '아니오'
              },
              {
                txt: '예'
              },
              {
                txt: '이게 정답'
              }
            ]
          }
        ]
      }
      ],
      // 성적표 보기 화면에 랜더링 할 해당 데이터 저장 공간
      result: {
        problem_name: '기본 수학 1-1 가나다라마바사아자차카타',
        select_result: {
          0: [1, 'correct'],
          1: [3, 'wrong'],
          2: [1, 'correct'],
          3: [3, 'wrong'],
          4: [1, 'correct'],
          5: [3, 'wrong'],
          6: [1, 'correct'],
          7: [3, 'wrong'],
          8: [1, 'correct'],
          9: [3, 'wrong'],
          10: [1, 'correct'],
          11: [3, 'wrong'],
          12: [1, 'correct'],
          13: [3, 'wrong'],
          14: [1, 'correct'],
          15: [3, 'wrong'],
          16: [1, 'correct'],
          17: [3, 'wrong'],
          18: [1, 'correct'],
          19: [3, 'wrong'],
          20: [1, 'correct'],
          21: [3, 'wrong'],
          22: [1, 'correct'],
          23: [3, 'wrong'],
          24: [1, 'correct'],
          25: [3, 'wrong'],
          26: [1, 'correct'],
          27: [3, 'wrong'],
          28: [1, 'correct'],
          29: [3, 'wrong'],
          30: [1, 'correct'],
          31: [3, 'wrong'],
          32: [1, 'correct'],
          33: [3, 'wrong'],
          34: [1, 'correct'],
          35: [3, 'wrong'],
          36: [1, 'correct'],
          37: [3, 'wrong'],
          38: [1, 'correct'],
          39: [3, 'wrong'],
          40: [1, 'correct'],
          41: [3, 'wrong'],
          42: [1, 'correct'],
          43: [3, 'wrong'],
          44: [1, 'correct'],
          45: [3, 'wrong'],
          46: [1, 'correct'],
          47: [3, 'wrong'],
          48: [1, 'correct'],
          49: [3, 'wrong'],
          50: [1, 'correct'],
          51: [3, 'wrong'],
          52: [1, 'correct'],
          53: [3, 'wrong'],
          54: [1, 'correct'],
          55: [3, 'wrong']
        },
        correct: 42,
        problem: 55
      }
    }
  },
  getters: {
  },
  mutations: {
    // 회원가입 시 user state 정보 저장 함수
    regist_user (state, data) {
      state.user[data.email_id] = data
    },
    // 문제 만들기 화면에서 제작 완료 시 save_data state 에 저장과 동시에
    // 완료된 문제집을 바로 랜더링 할 수 있게 load_data state 에 저장
    save_data (state, data) {
      state.load_data = data
      state.save_data.unshift(data)
    },
    // 문제집 리스트 화면에서 클릭 시 load_data state 에 해당 문제집 정보 저장
    loading_data (state, data) {
      state.load_data = data
    },
    // 로그인 시 현재 로그인 한 아이디의 정보를 user state 에서 now_user state 에 저장
    now_user (state, data) {
      state.now_user = data
    },
    // 로그아웃 버튼 클릭 시 now_user state 를 비워줌
    log_out (state) {
      state.now_user = {}
    },
    // 문제집 리스트 화면에서 시간순, 제작자 이름 순, 문제집 이름 순 정렬 시 처리할 함수
    select_option (state, data) {
      if (data === 'complete_time') {
        state.save_data.sort((a, b) => b.complete_time.localeCompare(a.complete_time))
      } else {
        state.save_data.sort((a, b) => a[data].localeCompare(b[data]))
      }
    },
    // localstorage 를 사용하지 않기 때문에, 페이지 새로고침 시 로그인 화면으로 안내 알람창 + 로그인 화면으로 이동
    check_data () {
      if (this.$store.state.now_user === {}) {
        alert('로그인 후 이용해 주세요')
        this.$router.push({ path: '/' })
      }
    },
    // 문제 풀기 완료 후 성적표 보기 창으로 이동 시 해당 데이터를 담을 함수
    save_result (state, data) {
      state.result = data
      console.log(state.result)
    }
  },
  actions: {
  },
  modules: {
  }
})
