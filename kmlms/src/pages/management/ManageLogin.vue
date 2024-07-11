<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { requiredRule, emailRule } from '@/utils/FormValidations';

const router = useRouter()

const visible = ref(false);
const loginLoading = ref(false);
const formIsValid = ref(false);

const form = ref({
    email: '',
    password: '',
});

const submit = async () => {
    if (formIsValid.value) {
        await router.push({ name: 'ManageDashboard' })
        router.go(0)
    } else {
        console.error('Form is not valid');
    }
};

</script>

<template>
    <v-row class="h-100">
        <v-col cols="12" md="6" class="bg-primary d-flex align-center justify-center">
            <v-card class="mx-auto pa-12 pt-6 pb-8" elevation="8" width="448" max-width="448" rounded="lg">
                <div class="d-flex flex-column align-center mb-5">
                    <v-icon size="48" class="text-white mr-2">
                        mdi-school
                    </v-icon>
                    <v-card-title>
                        KM-LMS Management
                    </v-card-title>
                </div>
                <v-form ref="loginForm" v-model="formIsValid" @submit.prevent="submit">
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field density="comfortable" v-model="form.email" placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline" :rules="[requiredRule, emailRule]"
                        variant="solo-filled"></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password

                        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                            target="_blank">
                            Forgot login password?</a>
                    </div>

                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" v-model="form.password"
                        :type="visible ? 'text' : 'password'" density="comfortable" placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline" variant="solo-filled"
                        @click:append-inner="visible = !visible" :rules="[requiredRule]"></v-text-field>



                    <v-btn :loading="loginLoading" type="submit" class="my-8" color="blue" size="large" variant="tonal"
                        block>
                        Log In
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
        <v-col col="12" md="6">
            <div class="d-flex flex-column align-center justify-center h-100">
                <v-icon size="128" class="text-primary mr-2">
                    mdi-school
                </v-icon>
                <div class="text-center text-subtitle-1 text-medium-emphasis">
                    Welcome to KM-LMS Management
                </div>
            </div>
        </v-col>
    </v-row>
</template>