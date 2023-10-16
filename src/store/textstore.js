import { data_cur } from '../store/store';

export const hss_palette = {
    0: "#00AD7C",
    1: "#FFD039",
    2: "#E45A01",
    3: "#CB3327",
};

export const sma_risk_messages = {
    "low": {
        "description": (
            "Maintaining hydration through regular fluid consumption and modifying"+
            " clothing is still a simple, yet effective, way of keeping cool and"+
            " preserving health and performance during the summer months."
        ),
        "suggestions": `
        <p>· Ensure pre-exercise hydration by consuming 6 ml of water per kilogram of body weight
        every 2-3 hours before exercise. For a 70kg individual, this equates to 420ml of fluid
        every 2-3 hours (a standard sports drink bottle contains 500ml).</p>
        <p>· Drink regularly throughout exercise. You should aim to drink enough to offset sweat
        losses, but it is important to avoid over-drinking because this can also have negative
        health effects. To familiarise yourself with how much you typically sweat, become
        accustomed to weighing yourself before and after practice or competition.</p>
        <p>· Where possible, select light-weight and breathable clothing with extra ventilation.</p>
        <p>· Remove unnecessary clothing/equipment and/or excess clothing layers.</p>
        · Reduce the amount of skin that is covered by clothing – this will help increase your
        sweat evaporation, which will help you dissipate heat.
        `,
    },
    "moderate": {
        "description": (
            "Mncreasing the frequency and/or duration of your rest breaks during"+
            " exercise or sporting activities is an effective way of reducing your risk"+
            " for heat illness even if minimal resources are available."
        ),
        "suggestions": `
        <p>· During training sessions, provide a minimum of 15 minutes of rest for every 45 minutes
        of practice.</p>
        <p>· Extend scheduled rest breaks that naturally occur during match-play of a particular
        sport (e.g. half-time) by ~10 minutes. This is effective for sports such as soccer/football and
        rugby and can be implemented across other sports such as field hockey.</p>
        <p>· Implement additional rest breaks that are not normally scheduled to occur. For example,
        3 to 5-min “quarter-time” breaks can be introduced mid-way through each half of a
        football or rugby match, or an extended 10-min drinks break can be introduced every
        hour of a cricket match or after the second set of a tennis match.</p>
        <p>· For sports with continuous play without any scheduled breaks, courses or play duration
        can be shortened.</p>
        · During all breaks in play or practice, everyone should seek shade – if natural shade is not
        available, portable sun shelters should be provided, and water freely available
        `,
    },
    "high": {
        "description": (
            "Active cooling strategies should be applied during scheduled and"+
            " additional rest breaks, or before and during activity if play is"+
            " continuous. Below are strategies that have been shown to effectively"+
            " reduce body temperature. The suitability and feasibility of each strategy"+
            " will depend on the type of sport or exercise you are performing. "
        ),
        "suggestions": `
        <p>· Drinking cold fluids and/or ice slushies before exercise commences. Note that cold water
        and ice slushy ingestion during exercise is less effective for cooling.</p>
        <p>· Submerging your arms/feet in cold water.</p>
        <p>· Water dousing – wetting your skin with cool water using a sponge or a spray bottle helps
        increase evaporation, which is the most effective cooling mechanism in the heat.</p>
        <p>· Ice packs/towels – placing an ice pack or damp towel filled with crushed ice around your
        neck.</p>
        · Electric (misting) fans – outdoor fans can help keep your body cool, especially when
        combined with a water misting system.
        `,
    },
    "extreme": {
        "description": (
            "Exercise/play should be suspended. If play has commenced, then all"+
            " activities should be stopped as soon as possible."
        ),
        "suggestions": `
        <p>· All players should seek shade or cool refuge in an air-conditioned space if available</p>
        * Active cooling strategies should be applied.
        `,
    },
};
export function getRiskDetails(risk_level) {

    const riskMessage = sma_risk_messages[risk_level];

    if (!riskMessage) {
        return {
            description: '',
            suggestion: '',
            icons: []
        };
    }

    const description = riskMessage.description;
    const suggestion = riskMessage.suggestions;
    
    let icons = [
        { imgSrc: "/icons/water-bottle.png", altText: "Stay hydrated" },
        { imgSrc: "/icons/tshirt.png", altText: "Wear light clothing" },
    ];
    
    if (risk_level === 'moderate' || risk_level === 'high') {
        icons.push({ imgSrc: "/icons/pause.png", altText: "Rest Breaks" });
    }
    
    if (risk_level === 'high') {
        icons.push({ imgSrc: "/icons/slush-drink.png", altText: "Active Cooling" });
    }
    
    if (risk_level === 'extreme') {
      icons = [
        { imgSrc: "/icons/stop.png", altText: "Consider Suspending Play",size: "100px" },
      ];
    }
    
    return { description, suggestion, icons };
}