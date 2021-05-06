<template>
  <div class="cartList">
      <cart-list-item v-for="(item,index) in cartList" :cartList="item" :key="index"></cart-list-item>
        <!-- <ul>
            <li>lcx1</li>
            <li>lcx2</li>
            <li>lcx3</li>
            <li>lcx4</li>
            <li>lcx5</li>
            <li>lcx6</li>
            <li>lcx7</li>
            <li>lcx8</li>
            <li>lcx9</li>
            <li>lcx10</li>
            <li>lcx11</li>
            <li>lcx12</li>
            <li>lcx13</li>
            <li>lcx14</li>
            <li>lcx15</li>
            <li>lcx16</li>
            <li>lcx17</li>
            <li>lcx18</li>
            <li>lcx19</li>
            <li>lcx20</li>
            <li>lcx21</li>
            <li>lcx22</li>
            <li>lcx23</li>
            <li>lcx24</li>
            <li>lcx25</li>
            <li>lcx26</li>
            <li>lcx27</li>
            <li>lcx28</li>
            <li>lcx29</li>
            <li>lcx30</li>
            <li>lcx31</li>
            <li>lcx32</li>
            <li>lcx33</li>
            <li>lcx34</li>
            <li>lcx35</li>
            <li>lcx36</li>
            <li>lcx37</li>
            <li>lcx38</li>
            <li>lcx39</li>
            <li>lcx40</li>
            <li>lcx41</li>
            <li>lcx42</li>
            <li>lcx43</li>
            <li>lcx44</li>
            <li>lcx45</li>
            <li>lcx46</li>
            <li>lcx47</li>
            <li>lcx48</li>
            <li>lcx49</li>
            <li>lcx50</li>
            <li>lcx51</li>
            <li>lcx52</li>
            <li>lcx53</li>
            <li>lcx54</li>
            <li>lcx55</li>
            <li>lcx56</li>
            <li>lcx57</li>
            <li>lcx58</li>
            <li>lcx59</li>
            <li>lcx60</li>
            <li>lcx61</li>
            <li>lcx62</li>
            <li>lcx63</li>
            <li>lcx64</li>
            <li>lcx65</li>
            <li>lcx66</li>
            <li>lcx67</li>
            <li>lcx68</li>
            <li>lcx69</li>
            <li>lcx70</li>
            <li>lcx71</li>
            <li>lcx72</li>
            <li>lcx73</li>
            <li>lcx74</li>
            <li>lcx75</li>
            <li>lcx76</li>
            <li>lcx77</li>
            <li>lcx78</li>
            <li>lcx79</li>
            <li>lcx80</li>
            <li>lcx81</li>
            <li>lcx82</li>
            <li>lcx83</li>
            <li>lcx84</li>
            <li>lcx85</li>
            <li>lcx86</li>
            <li>lcx87</li>
            <li>lcx88</li>
            <li>lcx89</li>
            <li>lcx90</li>
            <li>lcx91</li>
            <li>lcx92</li>
            <li>lcx93</li>
            <li>lcx94</li>
            <li>lcx95</li>
            <li>lcx96</li>
            <li>lcx97</li>
            <li>lcx98</li>
            <li>lcx99</li>
            <li>lcx100</li>
        </ul>    -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
components:{
    Scroll,
CartListItem,
},
computed:{
  ...mapGetters([
     'cartList'
 ])
}
}
</script>

<style scpoed>
.cartList,ul{
    height: 100%;
    overflow: hidden;
}
</style>
