// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    employees: [
      {
        id: 1,
        first_name: "Madelena",
        last_name: "Tregidga",
        email: "mtregidga0@goo.ne.jp",
        gender: "Polygender",
        ip_address: "138.35.98.182",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADwSURBVCjPpdGhSwNhHMbxX93f8WpRs/VAGXYF0SA4DgyGsaDBwdQfJoO23dzumsFgfoNcMEwss3gKr0G4uuzSC6dfy8KdDBHkU79PegT5nfw5SEiIiRnQp0dEJdCaBgmO4ZQjYi/YrU0DDXVyVVlHdDlhe7IRIqL1AU/kMww5YK0ummWM6cww5oHNd1FfUDDi44dHCgpaX3KMx3NLzqgk5xqPp4G0cTh6vHFf4rjE4QiQQ1JSLnjlruSFM1JSFpAWFksXRTmiSYN1VlmhicUyj+x/3mBRzitOWcISY5Cwv5NtVdbLLGIwzGGeTVv+/eY3onJlSlwTV9MAAAAASUVORK5CYII=",
      },
      {
        id: 2,
        first_name: "Gerry",
        last_name: "Losselyong",
        email: "glosselyong1@princeton.edu",
        gender: "Non-binary",
        ip_address: "243.92.111.194",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAElSURBVCjPfZFNSwJBHMb9UPOd5pR9hUnvIQrFQl26FHXo0CmImEMoQUhl48vBw5qWtY461pKU9PTsrJRsFM9l2N/v/7IzOeT+z/ehI9qqpZvW2Ia+VdciI3Rk20SIsWBeMUTdXMkVgdjNAcwxg8MbTzEuXU0uBTY3CZ5gDMuMEHlFm3PhhZaKMviJAbo4UV5o6phtE7jO5FEkHnKTMY60F+7sAlPiiDDvhUc8UHrHvvVCg8KE+NnjNRQwYJIee6lwo2dcKZlbJCxgg7jP/wmxm46oqz4+WZE0Hnh4jx4+UEWQLlkTF2bKrX9gyIIeAhOI5UWdyVM34scX38exOkTgKnLlqo/loalzRMzZXWhUTElmHutA7KhtvWXLtqQ3VVn8es2/8gUo3nl2LXz6SAAAAABJRU5ErkJggg==",
      },
      {
        id: 3,
        first_name: "Lee",
        last_name: "Hatherley",
        email: "lhatherley2@simplemachines.org",
        gender: "Female",
        ip_address: "255.138.206.164",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ9SURBVDjLjZHdS1NhHMcF/4G8FgoWEQgVIhFKkNZC7CLadL0osxwy1CbNt522JAzfljrb9Ax1LtfUTTcSCkTCJV3VRe2it4vV2Vp7zs45bpAXkZAv9O05A6E3bRe/qx/fz+f7e54cADnlY6LmLJuMKUd5qF0izgwTFPbErfLuf5NT7hQV58dFlA6TWMkgyTveG7de84gouBULZQUotRPFSRsJFfcnGGpljt6Oh6+MJ3GwncuuAbVqqDVWNpSQrWHDjISSO5+Qb4goswKcHk6AWtcOm7kiatVogyNQeXs3dI8v52YF0DiTOMRwaweMHFM5O/TV/sqKwRfdUHvqnqndFbkVjrLEzYfiABMUHKaA9L49IJIWv0CM04TNAKg1tt/4AfnXI2H1g56X1uddWIo+QueTDtDw+qne4i1TQJDa54VvI6E0RpdTuLsowTD1eTUD+LNS9ZxqwLLUgoWIH753UzhhKdxuC6YVRr+weWOa33Y+XUNHII0Gr6T8J0Aeat6YfjuJ+6+dOGYs+G70S1yzl2w0echy/+IXtPpTqHfvAqBhgdaWzXIY5/r6tjqDSTS642+o1WwOpmGaT6HOJTK7NtiZZl+qqHVWQMNkfFPvFiqplWmj9lbfKrROYW9A00wqr9Er8l1BHvXO6IKO5TLfqh0TYKKQ6lF+Yk8ArWs1+xLQsdH1Oge3Umv/uFJji6wYXHGY51K4aOdDuwL0U5K+w0erj8dAg0d+3V2y87BQQJWNhP8C6D1SXuZOeuNVB/dDa48GalhhXybo4BXUyjS4BHQvpFHLJnFhgCh/A+gmRT19XdTSO2tYIt8JGiySd1X3+IlKG4FqiMjBnZn4CaGVtXQxzDRMAAAAAElFTkSuQmCC",
      },
      {
        id: 4,
        first_name: "Thibaud",
        last_name: "De Cruze",
        email: "tdecruze3@gizmodo.com",
        gender: "Male",
        ip_address: "246.197.133.156",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFrSURBVDjLpZO/SmNREMZ/uVxFCGy7L+AjpAgoIUW4hZjCCDZCbCQgVlY+gaDNLghibbmy2EgQTCOp8gaWYmFrpbE4Z+azuPe6UVE2ZGBgzoHz/Zk5U5HELFFZ2/uzu9ysHT2OVZUAd+SOuSEXLkdmuITMMHd+zIfn29uH/YtfGydpbal2PLdQTX4uTEVcfR7bMXCSjoOS8ePT1NJfghKAVCYONhenBtg+vCcHkAOwcwOnTRiNRkjCzHD3TwmQZRnmlgNQTOG0mSPX6/V3TJNTmqw9FgAl0tY1nGUwHA4xM2KMbyom1Uii0+ng5oUFz1HPshy50Wh8yTp59tJCWaxfwt9VMRgMiDG+y48Kut3uWz/SGAKQP5ZEq9X6lrmMGGJhofCyclGhvyb6/T4hBEIIxBgJIXyaQq/XQ6WC8vJqHSCh3W7/1z/wQlH6cHd/vvM7bLgZbv86biWzhNyQFXvhTsF5DlCZdRsTZoxXOgYqlSAcLRcAAAAASUVORK5CYII=",
      },
      {
        id: 5,
        first_name: "Rodger",
        last_name: "Vanyarkin",
        email: "rvanyarkin4@hatena.ne.jp",
        gender: "Male",
        ip_address: "85.147.89.91",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG1SURBVBgZpcG/S9RxHMfx5+dz3+LKsKxBC4KQXIvArYb+BQmuIYgGoaBJiAoiLCqwxUGwkBr7gaGOTu5NZhBkBRU3NEV2Q3d69/m+X+/6DEJcNoiPR3B3diKMjM1ePXN2+OFay3vcAQmXMBkuRy7cDLnjZphE7+7UXF39dmNhsjZdDJ8entpV7Yn9Vbajp9myKWC6aCWPrbVfbNd68sgfhZtz6UKHQBYIBCKRO3O3uHhylBOHT9G39yBFLPjb6ESdLLqLTSbj5etnZOutNlYa7s5WTEZW4E7mwMzSI340vlM/Xqe30ktZGjjg/EOlkUWTkT1ZekzFIscODfJ0cYZqZQ8YSI7jdJOJrHA5E/P32V/tY2hgiNKNA/v6WP34gXang7sIBLpJRhYl4+a52zSbLd58WmH5/TJzi/NstDew0pCcrUgii2VKZNdq12n8bPD5y1ee333Byru3BA8EAu5OtzKVZNFNbLp3+QGDA4Nk7Y1EJyXcRQiBbi6RRUlsKioF41fGyVI7IRP/I3eyMDI2O9t/9EhNZsiEmSEJSwlJyB2X4ebIhUtIZK8WJmvng7uzE5Ed+g22TgZNyTAeRAAAAABJRU5ErkJggg==",
      },
      {
        id: 6,
        first_name: "Silva",
        last_name: "Gulliman",
        email: "sgulliman5@pinterest.com",
        gender: "Agender",
        ip_address: "173.190.148.221",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJFSURBVDjLpZNNSFRRFMd/986dUaeZIS370BRbCKbgpiwIKYhWfSwKgqhNQau2bTOodq6CFkWbqBYtgmAIg7CgxL0iaBYZSYIfYfP9nHffe/e0mElrMW26m3s55/z+58/hHiUi/M8xjRLuprqiE9zFsQ0NNNerdRy0gzCquHlGVEMHd9QKx27tpucEeKtQ+gRhGUwCdAz8Ary/t9rQAY4kmQ5IdUDnIfCPw8IbWBwHBHb0gCXZWCBBiM3B/Guw67BvCAYvQ7IVpp6B50GZ0HweG5puzvT3K6X/oIXOmInpTA/0noXiMnx8AaXvcPA6rC3C2iwUwSjRfV3Dj+NKKZAajFIwlYXiLEzOQO9pOHoD3t2GuSwMXoC3C5AHQyhVnG3yVx4Q2RjoDEqlaQFoaoX2AVicAOdg4BJ8uA99pyC1t+aAQGlxlsgmECfY3Cze8heCeDduOovoMSTYgLkssVQbUi1gXl2ke8958DAGJc0u3MB6ILZCUBbah0dJBD5kusFFEFmIIkikAMW352dgaRwMniHQmJZdbD9wDXAgguDwZq6iKkuIjtVm4wQcJPc/gkIBXj5ZcoYRQyAiURXnzSBRAYlKSJhHtx9B2vpQYb4eLyJRBenoIkglhAnp0oDBR8SFuOAHEhZqxWG+/s4hYbEO1wVcFRTh1i5YEUWEhD/rYL3jpljpb1iqELL5/41Ylwu99WRQTqRxaS0SB5cG2YlEPmARXbuVjoj8soh1/pZA1R/9+vDcYYSTKNL/3F0B1KTFydPfoV+5q0ZcY8+j5QAAAABJRU5ErkJggg==",
      },
      {
        id: 7,
        first_name: "Aloise",
        last_name: "Sallan",
        email: "asallan6@g.co",
        gender: "Female",
        ip_address: "211.166.145.44",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIvSURBVDjLpVNNi1JRGH7OdfKaH5MTQkFhYeCiYTDaSAs3SVJQOxcFLf0TguAfCFwHQdt+gcPsIgcXxYiXXGQKxWSMFor5/XXv6X2P3stABkEHDu895zzv8z7Pe88RUkr8z9g5v6hUKq9Xq9Xz5XK5QxEU1VwsFhzfpNPpZ1sJDMO4RAmvgsFgWte9mFMSLAtKGync2wvi6OjwKa3+JKhWqw85ORQKXfP5fPjy9Tu4umVJWNIiIgmTyObz+XYLBD4Mh8NqMZ3OsKTkj8YJEVjOfJB6pGxsJWCPbrcbg8FgXdk0cXv/jqouN9W50X9VwMwmJTGIfwhLN6ofKJpqv9VqwePxKHA2myVPENwZsnsll8v91FjBuldSJTDB/sFd7O5eRqPRwGQyQa/Xw3A4RCQSEWT3CZNMp9OrjgKbQJFQZZZuGBXE43GMx2OnF7VaTUaj0V+MJ7vSIXCSzTWQCTRNQNd1+P1+dRdYwSZxuYnrHnBz7NvIjWMLctM4BnFz7UbzoG/BVm3lSgEfulwuVdkyOdmywUoFV2dl9h4T2Ao0UvC+VCphNBohEAjAc1GnGygcVf1+n+xoEEKoNcULRCBns5kCaJlMJt5sNh8Xi8WT4+N30N0CN29cx/1kCp/qn3F21sbp6TfU63X8oOH1et+SCpOUKQni/GvM5/MpOnxB88B+TByTySSoIsrlskkwF2MTiYRSIf7lORcKBbPdbqPb7d6jpFu05Y/FYi87nY78DZN2pgrwMw41AAAAAElFTkSuQmCC",
      },
      {
        id: 8,
        first_name: "Cati",
        last_name: "Dumphries",
        email: "cdumphries7@domainmarket.com",
        gender: "Polygender",
        ip_address: "171.127.22.244",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABxSURBVCjPY/jPgB8yUFtBdkPqh4T/kR+CD+A0Ie5B5P/ABJwmxBiE//f/gMeKkAlB/90W4FHg88Dzv20ATgVeBq7/bT7g8YXjBJf/RgvwKLB4YPFfKwCnAjMH0/8a/3EGlEmD7gG1A/IHJDfQOC4wIQALYP87Y6unEgAAAABJRU5ErkJggg==",
      },
      {
        id: 9,
        first_name: "Dorree",
        last_name: "Sprionghall",
        email: "dsprionghall8@creativecommons.org",
        gender: "Polygender",
        ip_address: "20.241.249.77",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAD4SURBVDjLxZMxTsRAFEOdaAU1ogs0XCDKkTgKdBwFcZooJRINK+UGNJtvm2I20WQzEcUWWBppUvj971hT2cY1qnGlDgAwjqMlYT4kQXJz77quKgIkoWma3Sm20ff9/gYkMYNK5rquERF/Ay6NuUji9eNo0hCBCOLt+anaAC6N87ckPNzdQDJI42uM7Qa5ubRBhBJAxjRxDZiz7im1kcyiEeE1YBiGYoV5tRECleKcckDbtku/L+/ffry/XbLOKyu/C2AeIVcEVllFL1MlQEqgIMqA00SQh+JU8QyxEaKLgCmEz+MPQgApkDj/g9Q/bViCgQoAqn9/jb8mSSzHKz3sXAAAAABJRU5ErkJggg==",
      },
      {
        id: 10,
        first_name: "Onfre",
        last_name: "Murcott",
        email: "omurcott9@shareasale.com",
        gender: "Male",
        ip_address: "80.173.80.25",
        avatar:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGZSURBVBgZpcHPi41hHMbhz/P2oJijzEKSQn4uFRsNK8lKKWZtFvMPKFulrKxZKGzs2MhismI3S5Qpg0YNZUFiaso5Z973e9+eJ45mYWo015VssxGZYur2qyvAXuAUcBxsTEKmaRJNAkkoWNqUvXBkz/YTyFy9eDRhm8u3Xt71f7r56I0LMr+dprg/+50Rs7bpiXHefloaUmQqeRd/HNq5hSol/undlyFVf9BupsgUtrdSGHj/dch6OCJRZArLmWJ6Ypz1UogqU1hOFJPXnzGQkGHmxlnO3ztHr9dDEpKQRETweGoGK6gyhSWqb/2WM8d2M/PiM1WvN8bBA/uobGOL13PzVO6CqqGwTLU8CFqbn8OOKkIkEqt1EVRSR5UpkkQ1HLb02yAGLZUkbAMGG9tEF1TuVqgyhTEjNn91XSAHlW1kEwoqu6PKFOpkIFE8nV1kpDe2jYUPH2nblpW2JbqgSQ2VZVNkipAWgf1zdy6w2oNLD1mL7R8UmSr0ZPLa88O2TyLtkDqwsAKrAweWsA3YoGVo5imSbTbiFyrGMBGmEu5TAAAAAElFTkSuQmCC",
      },
    ],
  });
}
