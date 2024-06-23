<template>
    <v-container fluid class="fill-height">
        <v-row class="h-100">
            <v-col cols="12" md="6" class="d-flex align-center justify-center">
                <v-card class="pa-12 pb-8" elevation="8" width="500" max-width="500" rounded="lg">
                    <v-form @submit.prevent="submitForm">
                        <!-- Email Field -->
                        <v-text-field
                            v-model="email.value.value"
                            label="E-mail"
                            prepend-inner-icon="mdi-email-outline"
                            variant="outlined"
                            :error-messages="email.errorMessage.value"
                        ></v-text-field>

                        <!-- Password Field -->
                        <v-text-field
                            v-model="password.value.value"
                            label="Password"
                            :type="visible ? 'text' : 'password'"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                            prepend-inner-icon="mdi-lock-outline"
                            variant="outlined"
                            @click:append-inner="togglePasswordVisibility"
                            :error-messages="password.errorMessage.value"
                        ></v-text-field>

                        <v-divider class="mt-0 mb-4" :thickness="2"></v-divider>

                        <!-- Submit Button -->
                        <v-btn color="blue" type="submit" block>
                            Log In
                        </v-btn>

                        <!-- Additional Links -->
                        <v-card-text class="text-center">
                            Trouble Signing in?
                            <router-link :to="{ name: 'ManageLogin' }">
                                Contact Admin
                            </router-link>
                        </v-card-text>
                    </v-form>
                </v-card>
            </v-col>

            <!-- Right Side Column -->
            <v-col cols="12" md="6" class="d-flex align-center justify-center bg-primary">
                Welcome to KM-LMS
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

// Define the validation schema
const validationSchema = yup.object({
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

// Setup the form
const { handleSubmit } = useForm({
    validationSchema,
});

// Define fields
const email = useField('email');
const password = useField('password');

// Visibility state for password field
const visible = ref(false);

// Toggle password visibility
const togglePasswordVisibility = () => {
    visible.value = !visible.value;
};

const router = useRouter();
// Handle form submission
const submitForm = handleSubmit(values => {
    console.log('Form is valid, submitting:', values);
    // Navigate to the dashboard route upon successful validation
    router.push({ name: 'ManageDashboard' });
});
</script>


<style>
.fill-height {
    align-items: start !important;
}
</style>
