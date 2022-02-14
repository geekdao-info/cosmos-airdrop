<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useProjectStore } from '@/store/project';
import { useProfileStore } from '@/store/profile';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import type { FormInstance } from 'ant-design-vue';

interface Address {
    value: string;
    key: number;
}
interface Profile {
    key: number;
    name: string;
    account: Address;
}

const projectStore = useProjectStore();
const profileStore = useProfileStore();
const visible = ref<boolean>(false);
// edit or add
const action = ref('');
const loadProfileInfo = ref();

const afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
};
const showDrawer = () => {
    action.value = '';
    visible.value = true;
};

const childrenDrawer = ref<boolean>(false);

const onClose = () => {
    action.value = '';
    resetForm();
    visible.value = false;
};

const onCloseChildrenDrawer = () => {
    action.value = '';
    childrenDrawer.value = false;
};

const showChildrenDrawer = () => {
    childrenDrawer.value = true;
};

defineExpose({
    showDrawer
});

// 表单操作

const formRef = ref<FormInstance>();
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
    }
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 5 }
    }
};
const dynamicValidateForm = reactive<{ key: number; name: string; addresses: Address[] }>({
    key: 0,
    name: '',
    addresses: [{ key: Date.now(), value: '' }]
});
const submitForm = () => {
    formRef.value
        ?.validate()
        .then(() => {
            const address = dynamicValidateForm.addresses.map((item) => {
                return item.value.trim();
            });
            const profile = {
                key: action.value === 'edit' ? dynamicValidateForm.key : Date.now(),
                name: dynamicValidateForm.name,
                create: action.value === 'edit' ? loadProfileInfo.value.create : Date.now(),
                update: Date.now(),
                address
            };
            // edit profile
            if (action.value === 'edit') {
                profileStore.editProfile(profile);
            } else if (action.value === 'add') {
                profileStore.addProfile(profile);
            }
            onCloseChildrenDrawer();
            console.log('values', address, dynamicValidateForm.addresses.values(), Date.now());
        })
        .catch((error) => {
            console.log('error', error);
        });
};
const resetForm = () => {
    formRef.value?.resetFields();
    dynamicValidateForm.addresses = [{ key: Date.now(), value: '' }];
    if (action.value !== 'edit') {
        dynamicValidateForm.key = 0;
    }
    dynamicValidateForm.name = '';
};
const removeAddress = (item: Address) => {
    let index = dynamicValidateForm.addresses.indexOf(item);
    if (index !== -1) {
        dynamicValidateForm.addresses.splice(index, 1);
    }
};
const addAddress = () => {
    dynamicValidateForm.addresses.push({
        value: '',
        key: Date.now()
    });
};

const editProfile = (profileKey: number) => {
    action.value = 'edit';
    resetForm();
    loadProfileInfo.value = profileStore.getProfile(profileKey);
    dynamicValidateForm.key = Number(loadProfileInfo.value?.key) ?? 0;
    dynamicValidateForm.name = loadProfileInfo.value?.name ?? '';
    const address = loadProfileInfo.value?.address.map((item: string) => {
        return {
            key: Date.now(),
            value: item
        };
    });
    dynamicValidateForm.addresses = address ?? [{ key: Date.now(), value: '' }];
    console.log('edit', dynamicValidateForm, loadProfileInfo.value, '---', profileKey, '---');
    showChildrenDrawer();
};

const addProfile = () => {
    action.value = 'add';
    resetForm();
    showChildrenDrawer();
};

const deleteProfile = (key: number) => {
    profileStore.removeProfile(key);
};
</script>
<template>
    <a-drawer
        v-model:visible="visible"
        title="Manage Profile"
        width="50vw"
        :destroyOnClose="true"
        :closable="true"
        :footer-style="{ textAlign: 'right' }"
        @close="onClose"
    >
        <table class="table w-full">
            <tbody>
                <tr v-for="(item, index) in profileStore.profiles" :key="index">
                    <td class="w-10"
                        ><a-typography-paragraph
                            :ellipsis="true"
                            style="margin-bottom: 0.1rem; width: 120px"
                        >
                            {{ item.name }}
                        </a-typography-paragraph></td
                    >
                    <td>{{ item.address.length }} address</td>
                    <td
                        ><button @click="editProfile(item.key)" class="btn btn-primary btn-sm mr-4"
                            >Edit</button
                        >
                        <a-popconfirm
                            title="Are you sure delete this profile?"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="deleteProfile(item.key)"
                        >
                            <button class="btn btn-outline btn-error btn-sm">delete</button>
                        </a-popconfirm>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- ADD or EDIT PROFILE -->
        <a-drawer
            v-model:visible="childrenDrawer"
            :title="action + ' Profile'"
            width="45vw"
            :closable="true"
        >
            <!-- <template #footer>
                <a-button style="margin-right: 8px" @click="onCloseChildrenDrawer">Cancel</a-button>
                <a-button type="primary" @click="onCloseChildrenDrawer">Submit</a-button>
            </template> -->
            <a-form
                ref="formRef"
                name="dynamic_form_item"
                :model="dynamicValidateForm"
                v-bind="formItemLayoutWithOutLabel"
            >
                <a-form-item
                    label="Profile Name"
                    name="name"
                    v-bind="formItemLayout"
                    :rules="[{ required: true, message: 'Please input your Profile name!' }]"
                >
                    <a-input v-model:value="dynamicValidateForm.name" />
                </a-form-item>
                <a-form-item
                    v-for="(address, index) in dynamicValidateForm.addresses"
                    :key="address.key"
                    v-bind="index === 0 ? formItemLayout : {}"
                    :label="index === 0 ? 'Address' : ''"
                    :name="['addresses', index, 'value']"
                    :rules="{
                        required: true,
                        message: 'Address can not be null',
                        trigger: 'change'
                    }"
                >
                    <a-input
                        v-model:value="address.value"
                        placeholder="please input Address"
                        style="width: 90%; margin-right: 4px"
                    />
                    <MinusCircleOutlined
                        v-if="dynamicValidateForm.addresses.length > 1"
                        class="dynamic-delete-button"
                        :disabled="dynamicValidateForm.addresses.length === 1"
                        @click="removeAddress(address)"
                    />
                </a-form-item>
                <a-form-item v-bind="formItemLayoutWithOutLabel">
                    <a-button type="dashed" style="width: 80%" @click="addAddress">
                        <PlusOutlined />
                        Add Address
                    </a-button>
                </a-form-item>
                <a-form-item v-bind="formItemLayoutWithOutLabel">
                    <button class="btn btn-primary btn-sm" html-type="submit" @click="submitForm"
                        >Submit</button
                    >
                    <a-popconfirm
                        title="Are you sure reset this profile?"
                        ok-text="Yes"
                        cancel-text="No"
                        @confirm="resetForm"
                    >
                        <button class="btn btn-outline btn-sm ml-5">Reset</button>
                    </a-popconfirm>
                </a-form-item>
            </a-form>
        </a-drawer>
        <template #extra>
            <button class="btn btn-primary btn-outline" @click="addProfile">Add Profile</button>
        </template>
    </a-drawer>
</template>
<style lang="less" scoped></style>
