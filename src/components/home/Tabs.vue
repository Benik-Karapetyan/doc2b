<template>
    <div class="tabbed round">
        <ul>
            <router-link
                v-for="(tab, i) in tabs"
                :key="i"
                :to="tab.to"
                style="text-decoration: none"
            >
                <li
                    :class="{ active: $route.path === tab.to }"
                    v-text="tab.text"
                ></li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Tabs",

    data: () => ({
        tabs: [
            { text: "Վիճակագրություն", to: "/statistics" },
            { text: "Գործողություն", to: "/action" },
            { text: "Փաստաթուղթ", to: "/document" },
        ],
    }),
};
</script>

<style scoped>
.tabbed {
    overflow: hidden;
}

.tabbed ul {
    display: flex;
    margin: 0px;
    padding: 0px;
    padding-left: 40px;
    overflow: hidden;
    list-style-type: none;
}

.tabbed ul * {
    margin: 0px;
    padding: 0px;
}

.tabbed ul li {
    cursor: pointer;
    position: relative;
    display: block;
    background-color: #ffffff;
    color: #0e546d;
    font-size: 15px;
    font-weight: bold;
    padding: 5px 6px;
    margin-right: 22px;
    opacity: 0.3;
    z-index: 2;
    transition: all 250ms ease;
}

.tabbed ul li:before,
.tabbed ul li:after {
    display: block;
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 15px;
    background-color: #f7f7f7;
    transition: all 250ms ease;
}

.tabbed ul li:before {
    right: -10px;
    transform: skew(20deg, 0deg);
}

.tabbed ul li:after {
    left: -10px;
    transform: skew(-20deg, 0deg);
}

.tabbed ul li:hover,
.tabbed ul li:hover:before,
.tabbed ul li:hover:after {
    background-color: #f7f7f7;
    color: #0e546d;
    opacity: 1;
}
.tabbed ul li.active {
    z-index: 3;
}
.tabbed ul li.active,
.tabbed ul li.active:before,
.tabbed ul li.active:after {
    background-color: #f7f7f7;
    color: #0e546d;
    opacity: 1;
}

.tabbed.round ul li {
    border-radius: 6px 6px 0 0;
}
.tabbed.round ul li:before {
    border-radius: 0 6px 0 0;
}
.tabbed.round ul li:after {
    border-radius: 6px 0 0 0;
}
</style>
