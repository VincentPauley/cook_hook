/*
      Function: templateParameters

      Parameters:

          templateParameters (OBJECT), required keys:

              template_location (STRING) -> location of the .hbs file
              data (OBJECT) -> any datasets necessary for the template to compile
              target (STRING) -> any DOM selector like an ID or a class
*/
function build_external_handlebars_template( templateParameters ) {
    $.get( templateParameters.template_location, ( source ) => {

        const template = Handlebars.compile( source );

        // compile the template with data if it exists
        const compiled_template = templateParameters.data ? template( templateParameters.data ) : template;

        $( templateParameters.target ).append( compiled_template );
    });
}
