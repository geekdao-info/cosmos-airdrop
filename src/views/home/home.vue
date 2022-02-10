<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-1 p-4 gap-4 max-w-6xl lg:grid-cols-3 lg:p-10 rounded-box">
            <card
                v-for="(item, index) in 7"
                :key="index"
                class="card-bordered bg-base-100 border-2"
            >
                <div class="card-body">
                    <div class="card-title flex items-center">
                        <div class="avatar">
                            <div
                                class="rounded-full w-10 h-10 ring ring-primary ring-offset-base-100"
                            >
                                <img
                                    src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                                />
                            </div>
                        </div>
                        <h4 class="ml-3">Top 10 UI Components</h4>
                    </div>

                    <div class="mb-2 space-x-2 card-actions">
                        <badge class="badge-ghost">Colors</badge>
                        <badge class="badge-ghost">UI Design</badge>
                        <badge class="badge-ghost">Creativity</badge>
                    </div>
                    <p
                        >Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
                        necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p
                    >
                    <div class="justify-end space-x-1 card-actions">
                        <button class="btn btn-square loading"></button>

                        <button class="btn">
                            <h3 class="text-primary">4,600</h3><span class="ml-1">CLAIM</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-3 h-3 ml-1 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script></script>
