import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:import.meta.env.local.VITE_SANITY_ID,
    dataset:"production"
})