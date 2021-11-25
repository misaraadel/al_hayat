<template>
<section class="w-full py-24 bg-white" id="contact">
    <div class="container">
        <coreGeneral-heading
            headImg="contact"
            :headingTitle="`${conactTitle}`"
            :headingDesc="`${contactDesc}`"/>

        <form class="w-full form-content">
            <div class="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div class="from-group w-full relative">
                    <label class="label-shape block font-bold text-dark mb-5">
                        الاسم
                    </label>
                    
                    <div class="form-input w-full h-12 relative overflow-hidden">
                        <img 
                            src="/img/user.svg"
                             class="form-icon w-5 h-5 absolute right-4"
                            :alt="`${contactDesc}`" />

                        <input 
                            type="text"
                            class="form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5"
                            placeholder="مثل : مازن محمود" />
                    </div>
                </div>

                <div class="from-group w-full relative">
                    <label class="label-shape block font-bold text-dark mb-5">
                        رقم الجوال
                    </label>
                    
                    <div class="form-input w-full h-12 relative overflow-hidden">
                        <img 
                            src="/img/conact_call.svg"
                             class="form-icon w-5 h-5 absolute right-4"
                            :alt="`${contactDesc}`" />

                        <input 
                            type="text"
                            class="form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5"
                            placeholder="مثل : 056699744" />
                    </div>
                </div>

                <div class="from-group w-full relative">
                    <label class="label-shape block font-bold text-dark mb-5">
                        الفرع
                    </label>
                    
                    <div class="form-input select w-full h-12 relative overflow-hidden">
                        <img 
                            src="/img/conact_location.svg"
                            class="form-icon w-5 h-5 absolute right-4"
                            :alt="`${contactDesc}`" />

                        <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5">
                            <option value="فرع النظيم">
                                فرع النظيم
                            </option>
                        </select>
                    </div>
                </div>
                
                <div class="from-group w-full relative">
                    <label class="label-shape block font-bold text-dark mb-5">
                        القسم / الخدمة
                    </label>
                    
                    <div class="form-input select w-full h-12 relative overflow-hidden">
                        <img 
                            src="/img/conact_category.svg"
                             class="form-icon w-5 h-5 absolute right-4"
                            :alt="`${contactDesc}`" />

                        <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5">
                            <option value="عيادة الباطنية">
                                عيادة الباطنية
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="w-full mt-7 btn-contain h-full flex flex-col content-end items-end justify-end">
                <button class="submit-btn overflow-hidden cursor-pointer justify-center bg-secondary relative z-40 flex items-center content-center" href="#">
                    <img 
                        src="/img/yellow_clock.svg"
                        class="w-6 h-6 object-contain ml-2"
                        :alt="`${conactTitle}`" />
                    
                    <span class="text-white text-base font-semibold">
                        حجز موعد
                    </span>
                </button>
            </div>
        </form>
    </div>
</section>
</template>

<script setup lang="ts">
const conactTitle = 'حجز موعد'
const contactDesc = 'لا تتردد في التواصل معنا الأن لحجز موعدك'
</script>

<style lang="scss">
.form-content{

    .form-icon{
        top: calc(50% - 10px);
        z-index: 9;
    }
    .label-shape{
        font-size: 16px;
        line-height: 30px;
    }
    .form-input{
        &.select{
            &::after{
                content: '';
                position: absolute;
                width: 14px;
                height: 7px;
                background: url('/img/contact_arrow.svg');
                background-size: contain;
                background-repeat: no-repeat;
                left: 17px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    .form-control{
        border: 1px solid transparent;
        transition: all .2s linear;
        border-radius: 25px;

        &.select-options{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            color: #B8B8B8;
        }

        &::placeholder{
            color: #B8B8B8;
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
        }

        &:focus-within,
        &:visited,
        &:focus,
        &:hover{
            border-color: #1D71B9;
            outline: none !important;
        }
    }

    .submit-btn{
        width: 100% !important;
        height: 50px !important;
        border-radius: 25px !important;
        transition: all .2s linear;

        span{
            transform: translateY(-3px);
        }

        &::after{
            content: '';
            position: absolute;
            width: 0%;
            height: 100%;
            background-color: #153564;
            top: 0;
            left: 0;
            z-index: -1;
            transition: all .2s linear;
        }

        &:hover{
            &::After{
                width: 100%;
            }
        }
    }
}

@media (max-width: 900px) {
    .form-content{
        .btn-contain{
            justify-content: center;
            align-items: center;
            align-content: center;
        }
    }
}
</style>