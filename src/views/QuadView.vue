<script>
import QuadrantItem from "../components/item/QuadrantItem.vue"
export default {
    name: "QuadView",
    components: { QuadrantItem },
    data() {
        return {
            quad_tmp: {
                "id": 1,
                "name": "A",
                "code": "A",
                "circle_order": 0,
                "circle_number": 1,
                "index": 1,
                "color": "#ff0000",
                "macro_id": 1,
                "hex_ids": [
                    {
                        "id": 1,
                        "name": "A.00.01",
                        "code": "A.00.01",
                        "circle_order": 0,
                        "circle_number": 1,
                        "index": 1,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 2,
                        "name": "A.01.01",
                        "code": "A.01.01",
                        "circle_order": 1,
                        "circle_number": 1,
                        "index": 2,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 3,
                        "name": "A.01.02",
                        "code": "A.01.02",
                        "circle_order": 1,
                        "circle_number": 2,
                        "index": 3,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 4,
                        "name": "A.01.03",
                        "code": "A.01.03",
                        "circle_order": 1,
                        "circle_number": 3,
                        "index": 4,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 5,
                        "name": "A.01.04",
                        "code": "A.01.04",
                        "circle_order": 1,
                        "circle_number": 4,
                        "index": 5,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 6,
                        "name": "A.01.05",
                        "code": "A.01.05",
                        "circle_order": 1,
                        "circle_number": 5,
                        "index": 6,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 7,
                        "name": "A.01.06",
                        "code": "A.01.06",
                        "circle_order": 1,
                        "circle_number": 6,
                        "index": 7,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 8,
                        "name": "A.02.01",
                        "code": "A.02.01",
                        "circle_order": 2,
                        "circle_number": 1,
                        "index": 8,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 9,
                        "name": "A.02.02",
                        "code": "A.02.02",
                        "circle_order": 2,
                        "circle_number": 2,
                        "index": 9,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 10,
                        "name": "A.02.03",
                        "code": "A.02.03",
                        "circle_order": 2,
                        "circle_number": 3,
                        "index": 10,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 11,
                        "name": "A.02.04",
                        "code": "A.02.04",
                        "circle_order": 2,
                        "circle_number": 4,
                        "index": 11,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 12,
                        "name": "A.02.05",
                        "code": "A.02.05",
                        "circle_order": 2,
                        "circle_number": 5,
                        "index": 12,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 13,
                        "name": "A.02.06",
                        "code": "A.02.06",
                        "circle_order": 2,
                        "circle_number": 6,
                        "index": 13,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 14,
                        "name": "A.02.07",
                        "code": "A.02.07",
                        "circle_order": 2,
                        "circle_number": 7,
                        "index": 14,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 15,
                        "name": "A.02.08",
                        "code": "A.02.08",
                        "circle_order": 2,
                        "circle_number": 8,
                        "index": 15,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 16,
                        "name": "A.02.09",
                        "code": "A.02.09",
                        "circle_order": 2,
                        "circle_number": 9,
                        "index": 16,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 17,
                        "name": "A.02.10",
                        "code": "A.02.10",
                        "circle_order": 2,
                        "circle_number": 10,
                        "index": 17,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 18,
                        "name": "A.02.11",
                        "code": "A.02.11",
                        "circle_order": 2,
                        "circle_number": 11,
                        "index": 18,
                        "color": "#ff0000",
                        "quad_id": 1
                    },
                    {
                        "id": 19,
                        "name": "A.02.12",
                        "code": "A.02.12",
                        "circle_order": 2,
                        "circle_number": 12,
                        "index": 19,
                        "color": "#ff0000",
                        "quad_id": 1
                    }
                ],
                "polygon": "polygon(43.75% 0%, 56.25% 0%, 62.5% 10%, 75% 10%, 81.25% 20%, 93.75% 20%, 100% 30%, 93.75% 40%, 100% 50%, 93.75% 60%, 100% 70%, 93.75% 80%, 81.25% 80%, 75% 90%, 62.5% 90%, 56.25% 100%, 43.75% 100%, 37.5% 90%, 25% 90%, 18.75% 80%, 6.25% 80%, 0% 70%, 6.25% 60%, 0% 50%, 6.25% 40%, 0% 30%, 6.25% 20%, 18.75% 20%, 25% 10%, 37.5% 10%)"
            },
        };
    },
};
</script>

<template>
    <main id="home_view">
        <QuadrantItem :quad="this.quad_tmp"></QuadrantItem>
    </main>
</template>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
