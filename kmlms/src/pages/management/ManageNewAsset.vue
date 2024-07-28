<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateRouter = (routeName) => {
    router.push({ name: routeName });
};
</script>

<template name="ManageNewAsset">
    <v-container fluid class="fill-height">
        <v-row width="100%">
            <v-col cols="12" md="3">
                <v-sheet class="position-sticky top-0 bg-transparent">
                    <!-- Content when data is loaded -->
                    <v-card-title class="cursor-pointer py-6" @click="navigateRouter('ManageAssets')" exact link>
                        <v-icon icon="mdi-arrow-left-circle-outline" />
                        <span class="text-subtitle-1 ps-3">All Assets</span>
                    </v-card-title>
                    <v-card density="compact">
                        <v-card-text @click="scrollToElement('#ent-details-card')">
                            <v-list class="cursor-pointer">
                                <v-icon class="me-2" icon="mdi-card-bulleted-settings-outline" />
                                New Asset
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="9">
                <v-card>
                    <v-card-title class="text-h6">New Asset</v-card-title>
                    <v-divider />
                    <v-card-text>
                        <v-form>
                            <v-text-field clearable label="Asset Title" prepend-icon="mdi-format-title" density="comfortable"></v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-select label="Asset Type" :items="['Image', 'Video', 'PDF']" prepend-icon="mdi-folder-multiple-image">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-combobox chips multiple clearable label="Tags" item-color="primary"
                                        :items="['C', 'C++', 'Part-1']">
                                    </v-combobox>
                                </v-col>
                            </v-row>
                            <v-file-input density="compact" clearable label="File input"></v-file-input>
                        </v-form>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="d-flex justify-end px-5">
                        <v-btn color="error">Reset</v-btn>
                        <v-btn color="success">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>