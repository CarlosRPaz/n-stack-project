
// IT NEEDS TO BE HIDDEN SOMEWHERE SAFE. THIS IS HERE BECAUSE IT's HELD LIKE THIS IN A DEMO. SEEK GUIDANCE ON WHERE TO SAFELY STORE API_KEY. TYPICALLY WOULD STORE IN {process.env.API_KEY}
const TRN_Api_Key = "9b3726ed-5d04-4eb4-a60e-97f0da2ef4f6";

const requests = {
    fetchPlayerStats: `/profile/{platform}/{platformUserIdentifier}`,
    fetchPlayerStatsSegment: `/profile`,
    fetchPlayer: `/search`,
}

export default requests;

// https://tracker.gg/developers/docs/titles/overwatch