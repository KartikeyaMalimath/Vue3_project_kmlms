<script setup>

import { onMounted, reactive, ref } from 'vue';
import CountUp from 'vue-countup-v3'

const courseStore = ref([])
const loadingStoreCourses = ref(true)
const totalCoursesCount = ref(0)
const bestSelling = ref({
    "sale_count": "0",
    "title": "Data Not Awailable",
})

onMounted(async () => {
    setTimeout(() => {
        courseStore.value = [
            {
                "id": "cs001",
                "title": "Programming With C",
                "sub_title": "Hot Topic",
                "sub_title_icon": "mdi-fire",
                "rating": 3.5,
            },
            {
                "id": "cs002",
                "title": "Programming With C++",
                "sub_title": "Advanced",
                "sub_title_icon": "mdi-arrow-up-drop-circle-outline",
                "rating": 4.8
            }
        ],
            loadingStoreCourses.value = false;
        totalCoursesCount.value = courseStore.value.length;
    }, 1500);
    setTimeout(() => {
        bestSelling.value =
            {
                "sale_count": "455",
                "title": "Programming With C++",
            }
    }, 1000);
})

const viewCourse = (id) => {
    console.log(`Viewing course with ID: ${id}`);
}

</script>

<template name="ManageStore">
    <v-container fluid class="fill-height">
        <v-row width="100%">
            <v-col cols="4">

                <v-card>
                    <div class="d-flex flex-row">
                        <div>
                            <v-card-title class="text-overline">
                                Courses
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <count-up :end-val="totalCoursesCount"></count-up>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                Total Active Courses
                            </v-card-text>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center mx-3">
                            <v-btn density="compact" color="transparent" class="text-green" icon="mdi-refresh"></v-btn>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <div class="d-flex flex-row">
                        <div>
                            <v-card-title class="text-overline">
                                Best Selling Course
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <count-up :end-val="bestSelling.sale_count"></count-up>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                {{ bestSelling.title }}
                            </v-card-text>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center mx-3">
                            <v-btn density="compact" color="transparent" class="text-green" icon="mdi-cash"></v-btn>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <div class="d-flex flex-row">
                        <div>
                            <v-card-title class="text-overline">
                                New Course
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <v-icon icon="mdi-shape-square-plus" size="40"></v-icon>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                Create New Course 
                            </v-card-text>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center mx-3">
                            <v-btn size="large" color="transparent" class="text-green" icon="mdi-arrow-right"></v-btn>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-divider class="my-2"></v-divider>
        <v-row>
            <v-col v-for="n in 8" :key="n" v-if="loadingStoreCourses" cols="3">
                <v-skeleton-loader class="border" type="image, article"></v-skeleton-loader>
            </v-col>
            <v-col v-else cols="3" v-for="course in courseStore">
                <v-card>
                    <v-img height="150"
                        src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149379660.jpg?w=996&t=st=1721262573~exp=1721263173~hmac=15017bf5cd89408232ae52fce379aac4b213b933aab728c01cc331027c910bf1"
                        cover></v-img>

                    <v-divider></v-divider>
                    <v-card-item>
                        <v-card-title>{{ course.title }}</v-card-title>
                        <v-card-subtitle>
                            <span class="me-1">{{ course.sub_title }}</span>
                            <v-icon color="error" :icon="course.sub_title_icon" size="small"></v-icon>
                        </v-card-subtitle>
                        <v-rating :model-value="course.rating" color="amber" density="compact" size="small"
                            half-increments readonly></v-rating>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn class="text-button" text="View Course" block border
                            @click="viewCourse(course.id)"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>