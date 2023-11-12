import { reactive } from 'vue'

export const state = reactive({
    POSITION: {
        "X": [0, 0, 18.75, 18.75, 0, -18.75, -18.75, 0, 18.75, 37.5, 37.5, 37.5, 18.75, 0, -18.75, -37.5, -37.5, -37.5, -18.75],
        "Y": [0, -20, -10, 10, 20, 10, -10, -40, -30, -20, 0, 20, 30, 40, 30, 20, 0, -20, -30]
    },
    QUADS: [{
        "name": "A",
        "index": 1,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "B",
        "index": 2,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "C",
        "index": 3,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 25% 70%, 18.75% 60%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "D",
        "index": 4,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "E",
        "index": 5,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "F",
        "index": 6,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "G",
        "index": 7,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "H",
        "index": 8,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "I",
        "index": 9,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 25% 70%, 18.75% 60%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "L",
        "index": 10,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 25% 70%, 18.75% 60%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "M",
        "index": 11,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 25% 70%, 18.75% 60%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "N",
        "index": 12,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "O",
        "index": 13,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 18.75% 40%, 25% 30%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "P",
        "index": 14,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.05",
            "circle": 2,
            "index": 12,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "Q",
        "index": 15,
        "polygon": "polygon(43.75% 20%, 56.25% 20%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "R",
        "index": 16,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.07",
            "circle": 2,
            "index": 14,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "S",
        "index": 17,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "T",
        "index": 18,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.03",
            "circle": 2,
            "index": 10,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.09",
            "circle": 2,
            "index": 16,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    }, {
        "name": "U",
        "index": 19,
        "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 75% 30%, 81.25% 40%, 93.75% 40%, 100% 50%, 93.75% 60%, 81.25% 60%, 75% 70%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 80%, 43.75% 80%, 37.5% 90%, 25% 90%, 18.75% 80%, 25% 70%, 18.75% 60%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)",
        "hex_list": [{
            "name": "00.01",
            "circle": 0,
            "index": 1,
        }, {
            "name": "01.01",
            "circle": 1,
            "index": 2,
        }, {
            "name": "01.02",
            "circle": 1,
            "index": 3,
        }, {
            "name": "01.03",
            "circle": 1,
            "index": 4,
        }, {
            "name": "01.04",
            "circle": 1,
            "index": 5,
        }, {
            "name": "01.05",
            "circle": 1,
            "index": 6,
        }, {
            "name": "01.06",
            "circle": 1,
            "index": 7,
        }, {
            "name": "02.01",
            "circle": 2,
            "index": 8,
        }, {
            "name": "02.02",
            "circle": 2,
            "index": 9,
        }, {
            "name": "02.04",
            "circle": 2,
            "index": 11,
        }, {
            "name": "02.06",
            "circle": 2,
            "index": 13,
        }, {
            "name": "02.08",
            "circle": 2,
            "index": 15,
        }, {
            "name": "02.10",
            "circle": 2,
            "index": 17,
        }, {
            "name": "02.11",
            "circle": 2,
            "index": 18,
        }, {
            "name": "02.12",
            "circle": 2,
            "index": 19,
        }],
    },],

    getAxes(index) {
        const REDUCTION = 0.95;
        // REDUCTION is a constant used to bring the HEX closer to the center of the QUADRANT.
        // In this way we have the perception that the padding of the QUADRANTS increases
        const asse_y = 50 + this.POSITION.Y[index - 1] * REDUCTION + "%";
        const asse_x = 50 + this.POSITION.X[index - 1] * REDUCTION + "%";
        return `top: ${asse_y}; left: ${asse_x};`
    },

    getHexStyle(index) {
        const COLOR = ["#707070", "#700000", "#A00000", "#F00000", "#007000", "#00A000", "#00F000", "#000070", "#0000A0", "#0000F0", "#707000", "#A0A000", "#F0F000", "#700070", "#A000A0", "#F000F0", "#007070", "#00A0A0", "#00F0F0"]
        return `${this.getAxes(index)}; background-color: ${COLOR[index - 1]} `
    },

    getQuadStyle(quad) {
        return `z-index: ${20 - quad.index}; ${this.getAxes(quad.index)}; clip-path: ${quad.polygon};`
    },

    getHexId(index) {
        switch (true) {
            case 0:
                return `X.0.0`;
            case (index > 0):
                return `X.1.${index}`;
            case (index > 6):
                return `X.2.${index - 6}`;
        }

    },

    getHexList(quad) {
        return quad.hex_list;
    },
});