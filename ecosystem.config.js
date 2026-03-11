module.exports = {
    apps: [{
        name: "portal-seo",
        script: "npm run serve:static",
        env: {
            "MONGO_URI": "mongodb://app_portal-seo:***@vext3nodblx01-1.virtual-expo.com:27017/portal-seo?authSource=portal-seo",
            "MONGO_DB": "portal-seo",
            "MONGO_COLLECTION": "page-cache",
            "LOG_LEVEL": "DEBUG"
        }
    }]
}
