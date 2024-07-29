<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { useGoTo } from "vuetify";
import CkeditorClassic from "@/components/ckeditor/CkeditorClassic.vue";

const goTo = useGoTo();
const router = useRouter();

const navigateRouter = (routeName) => {
  router.push({ name: routeName });
};

const scrollToElement = (elementId) => {
  const options = {
    duration: 300,
    easing: "easeOutCubic",
    offset: -25,
  };
  console.log(options);
  goTo(elementId, options);
};

const assetTagItems = ref(["C", "C++", "Part-1"]);
const assetTypeList = ref(["Image", "Video", "PDF"]);
const editorData = ref("");
</script>

<template name="ManageNewAsset">
  <v-container fluid class="fill-height">
    <v-row width="100%">
      <v-col cols="12" md="3">
        <v-sheet class="position-sticky top-0 bg-transparent">
          <!-- Content when data is loaded -->
          <v-card-title
            class="cursor-pointer py-6"
            @click="navigateRouter('ManageAssets')"
            exact
            link
          >
            <v-icon icon="mdi-arrow-left-circle-outline" />
            <span class="text-subtitle-1 ps-3">All Assets</span>
          </v-card-title>
          <v-card density="compact">
            <v-card-text>
              <v-list class="cursor-pointer" @click="scrollToElement('#card-new-asset')">
                <v-icon class="me-2" icon="mdi-alpha-n-box" />
                New Asset
              </v-list>
              <v-list
                class="cursor-pointer"
                @click="scrollToElement('#card-asset-details')"
              >
                <v-icon class="me-2" icon="mdi-alpha-a-box" />
                Asset Details
              </v-list>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="9">
        <v-card id="card-new-asset">
          <v-card-title class="text-h6">New Asset</v-card-title>

          <v-divider />

          <v-card-text>
            <v-form>
              <v-text-field
                clearable
                label="Asset Title"
                prepend-icon="mdi-format-title"
                density="comfortable"
              ></v-text-field>
              <v-row>
                <v-col cols="6">
                  <v-select
                    label="Asset Type"
                    :items="assetTypeList"
                    prepend-icon="mdi-folder-multiple-image"
                  >
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-combobox
                    chips
                    multiple
                    clearable
                    label="Tags"
                    item-color="primary"
                    :items="assetTagItems"
                  >
                  </v-combobox>
                </v-col>
              </v-row>
              <v-number-input
                label="Asset Version"
                density="comfortable"
                outlined
                :min="0"
                :max="50"
                :step="0.1"
                color="transparent"
                prepend-icon="mdi-numeric"
              >
              </v-number-input>
            </v-form>
          </v-card-text>
        </v-card>

        <v-divider class="my-4" />

        <v-card id="card-asset-details">
          <v-card-title class="text-h6">Asset Detals</v-card-title>
          <v-divider />
          <v-form>
            <v-card-text>
              <ckeditor-classic
                label="Asset Description"
                icon="mdi-text"
                :value="editorData"
              />
              <v-file-input density="compact" clearable label="File input"></v-file-input>
            </v-card-text>
          </v-form>
          <v-divider />

          <v-card-actions class="d-flex justify-end px-5">
            <v-btn color="error">Reset</v-btn>
            <v-btn color="success">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

:deep(.ck-editor__editable_inline) {
    min-height: 10rem !important;
}

</style>