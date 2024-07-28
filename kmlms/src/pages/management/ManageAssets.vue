<script setup>

import { onMounted, reactive, ref } from 'vue';
import CountUp from 'vue-countup-v3'

const assetLibrary = ref([])
const loadingStoreAssets = ref(true)
const totalAssetsCount = ref(0)
const bestSelling = ref({
    "sale_count": 0,
    "title": "Data Not Awailable",
})

onMounted(async () => {
    setTimeout(() => {
        assetLibrary.value = [
            {
                "id": "cs001",
                "title": "Greedy Algorithm Question",
                "type": "Image",
                "type_icon": "mdi-image",
                "tags": ["C", "DSA", "CP"],
            },
            {
                "id": "cs002",
                "title": "Programming With C++",
                "type": "Video",
                "type_icon": "mdi-video",
                "tags": ["C++", "Part-1"]
            }
        ],
            loadingStoreAssets.value = false,
            totalAssetsCount.value = assetLibrary.value.length
    }, 1500);
    setTimeout(() => {
        bestSelling.value =
        {
            "use_count": 1054,
            "title": "Greedy Algorithm Question",
        }
    }, 1000);
})

const viewCourse = (id) => {
    console.log(`Viewing course with ID: ${id}`);
}

</script>

<template name="ManageAssets">
    <v-container fluid class="fill-height">
        <v-row width="100%">
            <v-col cols="4">

                <v-card>
                    <div class="d-flex flex-row">
                        <div>
                            <v-card-title class="text-overline">
                                Assets
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <count-up :end-val="totalAssetsCount"></count-up>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                Total Active Assets
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
                                Most Viewed Asset
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <count-up :end-val="bestSelling.use_count"></count-up>
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
                                New Asset
                                <div class="text-green-darken-3 text-h4 font-weight-bold">
                                    <v-icon icon="mdi-image-plus" size="40"></v-icon>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                Create New Asset
                            </v-card-text>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex align-center mx-3">
                            <router-link :to="{ name: 'ManageNewAsset' }">
                                <v-btn size="large" color="transparent" class="text-green"
                                    icon="mdi-arrow-right"></v-btn>
                            </router-link>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-divider class="my-2"></v-divider>
        <v-row>
            <v-col v-for="n in 8" :key="n" v-if="loadingStoreAssets" cols="3">
                <v-skeleton-loader class="border" type="image, article"></v-skeleton-loader>
            </v-col>
            <v-col v-else cols="3" v-for="asset in assetLibrary">
                <v-card>
                    <v-img height="150"
                        src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149379660.jpg?w=996&t=st=1721262573~exp=1721263173~hmac=15017bf5cd89408232ae52fce379aac4b213b933aab728c01cc331027c910bf1"
                        cover></v-img>

                    <v-divider></v-divider>
                    <v-card-item>
                        <v-card-title>{{ asset.title }}</v-card-title>
                        <v-card-subtitle>
                            <span class="me-1">{{ asset.type }}</span>
                            <v-icon color="error" :icon="asset.type_icon" size="small"></v-icon>
                        </v-card-subtitle>
                        <v-chip-group>
                            <v-chip variant="plain" color="green" v-for="tag in asset.tags" size="x-small">{{ tag
                                }}</v-chip>
                        </v-chip-group>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn class="text-button" text="View Asset" block border @click="viewCourse(asset.id)"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>