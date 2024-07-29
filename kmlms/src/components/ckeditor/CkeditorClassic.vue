<script setup>
import { ref, defineProps, nextTick } from "vue";
import {
    ClassicEditor,
    Heading,
    Bold,
    Essentials,
    Italic,
    Underline,
    Paragraph,
    Undo,
    Link,
    List,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

// Define props
const props = defineProps({
    value: {
        type: String,
        default: "",
    },
    icon: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        default: "",
    },
    height: {
        type: Number,
        default: 200,
    },
});

// Reactive references  
const editor = ClassicEditor;
const editorData = ref(props.value);
const editorConfig = {
    plugins: [Bold, Essentials, Italic, Paragraph, Undo, Underline, Heading, Link, List],
    toolbar: {
        items: [
            'undo', 'redo', '|',
            'heading', 'bold', 'italic', 'underline', '|',
            'link', 'blockQuote', 'insertTable', 'mediaEmbed', '|',
            'numberedList', 'bulletedList', 'todoList', '|',
            'code', 'highlight', 'findAndReplace', 'exportPdf'
        ],
        shouldNotGroupWhenFull: true
    },
    language: 'en',
};

// Method to handle CKEditor ready event
function CkReady() {
    nextTick(() => {
        // Targeting the editable area
        const editableElement = document.querySelector('.ck-editor__editable_inline');
        if (editableElement) {
            console.log(editableElement)
            editableElement.style.minHeight = `${props.height}px`;
        }
    });
}
</script>

<template>
    <v-card-item class="mb-3 px-0" :prepend-icon="icon">
        <div class="text-body-2 font-weight-bold text-grey-darken-1">{{ label }}</div>
        <!-- <div :style="{ minHeight: height + 'px' }"> -->
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="CkReady"></ckeditor>
        <!-- </div> -->
        <ol>
            <li>Test</li>
        </ol>
    </v-card-item>
</template>

<style scoped>
/* Add your CSS styles here */
/* src/assets/ckeditor-dark-theme.css */

:deep(.ck-editor-wrapper) {
    position: relative !important;
    /* Ensure proper positioning */
    display: flex !important;
    flex-direction: column !important;
}

:deep(.ck-editor__editable) {
    background-color: var(--v-theme-background-base) !important;
    color: var(--v-theme-on-surface) !important;
    border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133)) !important;
}

:deep(.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content) {
    border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133)) !important;
}

:deep(.ck-toolbar) {
    background-color: var(--v-theme-background-base) !important;
    border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133)) !important;
}

:deep(.ck-off) {
    color: light-dark(rgb(80, 80, 80), rgb(190, 190, 190)) !important;
}

:deep(.ck-button:hover) {
    background-color: light-dark(#eee, #555) !important;
    /* Darker hover effect */
}

:deep(.v-card-item__prepend) {
    margin: 0px 16px 0px 0px !important;
    padding: 0px 0px 0px !important;
}

:deep(.v-card-item__prepend .v-icon) {
    font-size: 24px !important;
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)) !important;
}

:deep(.ck-list, .ck-dropdown__panel_sw, .ck-toolbar__items, .ck-dropdown__panel-visible) {
    background-color: light-dark(#fff, #212121) !important;
}

:deep(.ck-dropdown__panel) {
    border: 0px !important;
}
</style>
