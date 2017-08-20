(() => {

    // Add welcome template to main target
    build_external_handlebars_template({
        template_location : './templates/home.hbs',
        data : {
            purpose : [
                'Quickly find recipe ingredients',
                'Tweak and save recipes to your cookbook',
                'Build a shopping list from select recipes'
            ]
        },
        target : '#site-wrapper'
    });

})();
