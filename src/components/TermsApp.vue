<script setup>
</script>

<template>
    <main class="d-flex flex-column align-items-center justify-content-center">
        <h1>Terms and Conditions</h1>
        <p>These are the terms and conditions for the use of this website.</p>



        <div class="accordion  accordion-flush d-flex flex-column align-items-center" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for
                                previewing layouts and visual mockups.
                            </li>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for
                                previewing layouts and visual mockups.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for
                                previewing layouts and visual mockups.
                            </li>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for
                                previewing layouts and visual mockups.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ol>
                            <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for previewing layouts and visual mockups.</li>
                            <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for previewing layouts and visual mockups.</li>
                            <ul>
                                <li>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                    industries for previewing layouts and visual mockups.
                                </li>
                            </ul>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                                industries for previewing layouts and visual mockups.
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/oficial_jenny.png?raw=true" alt="jenny">
    </main>
</template>

<style scoped>
.accordion{
    width: 100%;
}
.accordion-item{
    background-color: transparent;
    color: var(--color-text-ligth);
    border-bottom: 0;
    margin: .5rem 0;
    width: 90%;
}
.accordion-button{
    background-color: var(--color-btn);
    color: var(--color-text-dark);
    font-weight: 700;
    border-radius: .3rem !important;
}
.accordion-button:focus{
    box-shadow: inset 1px 1px 5px 0.25rem var(--color-btn-hover);
}
.accordion-button:hover{
    background-color: var(--color-btn-hover);
}
ul, ol{
    width: 95%;
    text-align: start;
    margin-top: 1rem;
}
li{
    margin-top: 1rem;
}
img{
    width: 90%;
}
</style>