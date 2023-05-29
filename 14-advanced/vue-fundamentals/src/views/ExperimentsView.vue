<script>
import ClickrButton from '../components/ClickrButton.vue';
import SocialProfile from '../components/SocialProfile.vue';
import FancyCalculator from '../components/FancyCalculator.vue';
import NumberFacts from '../components/NumberFacts.vue';

export default {
    name: 'ExperimentsView',
    components: {
        ClickrButton: ClickrButton,
        SocialProfile: SocialProfile,
        FancyCalculator: FancyCalculator,
        NumberFacts: NumberFacts
    }
}
</script>

<template>
    <div>
        <ClickrButton />
        <hr>
        <SocialProfile name="Groucho" motto="No gods no masters" pic="http://placekitten.com/500/500" />
        <SocialProfile name="Chico" motto="A nice glass eliminate" pic="http://placekitten.com/502/502" />
        <hr>
        <FancyCalculator />
        <hr>
        <NumberFacts />
    </div>
</template>
