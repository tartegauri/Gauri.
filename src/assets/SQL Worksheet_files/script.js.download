/**
 * Global namespace
 */
const livesql = {
    getPreferredEditorTheme: () => {
        return $("body").hasClass("is-darkmode") ? "dark" : "light";
    },
    // to be called on page 1 on page load
    parserDirectory: apex.env.APP_FILES + "/oracle-sql",
    initWorksheetEditor: () => {

        let getParsingErrors = () => [];

        (async () => {

            /*
             * Preferences
             */
            let prefLineNumbers = apex.items.P1_PREF_LINE_NUMBERS.value === "Y";
            let prefCloseBrackets = apex.items.P1_PREF_CLOSE_BRACKETS.value === "Y";

            const FONT_SIZE_CLASS_SMALL = "worksheet-font-size-small";
            const FONT_SIZE_CLASS_MEDIUM = "worksheet-font-size-medium";
            const FONT_SIZE_CLASS_LARGE = "worksheet-font-size-large";
            const FONT_SIZE_CLASS_CUSTOM = "worksheet-font-size-custom";

            const isCustomFontSize = () => {
                return $("body").hasClass( FONT_SIZE_CLASS_CUSTOM );
            };

            const getCustomFontSize = () => {
                return $(":root").css("--worksheet-font-size")?.trim()?.replace("px", "") || null;
            };

            const getFontSizePref = () => {
                if( $( "body" ).hasClass( FONT_SIZE_CLASS_SMALL ) ) {
                    return "small";
                } else if( $( "body" ).hasClass( FONT_SIZE_CLASS_MEDIUM ) ) {
                    // we don't persist the default choice
                    return null;
                } else if( $( "body" ).hasClass( FONT_SIZE_CLASS_LARGE ) ) {
                    return "large";
                } else {
                    return getCustomFontSize();
                }
            };

            const persistPreferences = () => {
                apex.server.process("set_preferences", {
                    x01: prefLineNumbers ? "Y" : "N",
                    x02: prefCloseBrackets ? "Y" : "N",
                    x03: getFontSizePref()
                });
            };

            /*
             * The CodeEditor constructor takes 3 parameters:
             *      1) elementId
             *      2) (optional) editor options: theme, readOnly, lineNumbers, closeBrackets
             *      3) (optional) an array of CodeMirror Extensions
             */
            const editor = new CodeEditor("editor", {
                lineNumbers: prefLineNumbers,
                closeBrackets: prefCloseBrackets,
                theme: livesql.getPreferredEditorTheme()
            }, [
                CodeMirror['@codemirror/view'].keymap.of([{
                    key: "Ctrl-Enter",
                    run: () => {
                        apex.livesql.run();
                        return true; // prevent further event handling
                    },
                }, {
                    key: "Cmd-Enter",
                    run: () => {
                        apex.livesql.run();
                        return true; // prevent further event handling
                    },
                }]),
                CodeMirror["@codemirror/lint"].linter( view => {
                    return getParsingErrors( editor.getEditor().state.doc, editor.getValue() );
                }, {
                    delay: 300
                })
            ]);

            editor.setValue(apex.items.P1_SQL.value);

            const menu$ = $("#actions_menu");
            const menuItems = menu$.menu("option", "items");

            menuItems.push( {
                type: "separator"
            } );

            /*
             * Line Numbers
             */
            menuItems.push( {
                type: "toggle",
                label: "Show Line Numbers",
                set: ( val ) => {
                    prefLineNumbers = !prefLineNumbers;
                    editor.setOptions( {
                        lineNumbers: prefLineNumbers
                    } );
                    persistPreferences();
                },
                get: () => prefLineNumbers
            } );

            /*
             * Auto-close Brackets
             */
            menuItems.push( {
                type: "toggle",
                label: "Auto-close Brackets",
                set: ( val ) => {
                    prefCloseBrackets = !prefCloseBrackets;
                    editor.setOptions( {
                        closeBrackets: prefCloseBrackets
                    } );
                    persistPreferences();
                },
                get: () => prefCloseBrackets
            } );

            /*
             * Code Font Size
             */

            // the size is either one of the 3 classes or a value like "40"
            const setFontSize = size => {
                $( "body" )
                    .removeClass( FONT_SIZE_CLASS_SMALL )
                    .removeClass( FONT_SIZE_CLASS_MEDIUM )
                    .removeClass( FONT_SIZE_CLASS_LARGE )
                    .removeClass( FONT_SIZE_CLASS_CUSTOM );
                
                if( [ FONT_SIZE_CLASS_SMALL, FONT_SIZE_CLASS_MEDIUM, FONT_SIZE_CLASS_LARGE ].includes( size ) ) {
                    $( "body" ).addClass( size );
                } else {
                    $( "body" ).addClass( FONT_SIZE_CLASS_CUSTOM );
                    $( ":root" ).css("--worksheet-font-size", "" + size + "px");
                }

                persistPreferences();
            };

            const getCustomLabel = () => {
                return "Custom..." + ( isCustomFontSize() ? `(${getCustomFontSize()}px)` : "" );
            };

            menuItems.push({
                href: "",
                icon: "fa-font-size",
                iconType: "fa",
                label: "Worksheet Font Size",
                type: "subMenu",
                action: "font-size-action",
                menu: {
                    items: [{
                        type: "toggle",
                        label: "Small",
                        set: () => {
                            setFontSize(FONT_SIZE_CLASS_SMALL);
                        },
                        get: () => $( "body" ).hasClass( FONT_SIZE_CLASS_SMALL )
                    }, {
                        type: "toggle",
                        label: "Medium (Default)",
                        set: () => {
                            setFontSize(FONT_SIZE_CLASS_MEDIUM);
                        },
                        get: () => $( "body" ).hasClass( FONT_SIZE_CLASS_MEDIUM )
                    }, {
                        type: "toggle",
                        label: "Large",
                        set: () => {
                            setFontSize(FONT_SIZE_CLASS_LARGE);
                        },
                        get: () => $( "body" ).hasClass( FONT_SIZE_CLASS_LARGE )
                    }, {
                        type: "toggle",
                        label: getCustomLabel(),
                        set: () => {
                            const fontSizeRaw = prompt("Enter the font size in pixels");
                            if (fontSizeRaw === null) {
                                // cancel clicked
                                return;
                            }
                            const fontSize = parseInt(fontSizeRaw);
                            if (isNaN(fontSize) || fontSize < 1 || fontSize > 100) {
                                alert("The font size must be a valid number between 1 and 100px");
                            } else {
                                setFontSize( fontSize );
                            }
                        },
                        get: isCustomFontSize
                    }]
                }
            });

            menu$.on("menubeforeopen", () => {
                menuItems[menuItems.length - 1].menu.items[3].label = getCustomLabel();
            });

            /*
             * Parsing Logic
             */
            const getRawErrors = await (new Promise(resolve => {
                require([ livesql.parserDirectory + "/main.js"], function (main) {
                    resolve(main.getParsingErrors);
                });
            }));

            getParsingErrors = ( doc, content ) => {

                return new Promise( resolve => {
                    getRawErrors( content ).then( errors => {

                        function posToOffset(doc, line, column) {
                            return doc.line(line + 1).from + column;
                        }

                        const maxLines = doc.text.length;
                        const cmErrors = [];

                        for ( let i = 0; i < errors.length; i++ ) {
                            const error = errors[i];

                            // if for whatever reason the error points to a position that doesn't exist
                            // in the current doc, adding the linter error would error out.
                            // we ignore such edge cases
                            if( error.range.start.line + 1 > maxLines || 
                                error.range.end.line + 1 > maxLines ||
                                error.range.start.column > doc.line( error.range.start.line + 1 ).length ||
                                error.range.end.column > doc.line( error.range.end.line + 1 ).length )
                            {
                                continue;    
                            }

                            cmErrors.push( {
                                from: posToOffset( doc, error.range.start.line, error.range.start.column ),
                                to: posToOffset(doc, error.range.end.line, error.range.end.column ),
                                severity: "warning",
                                message: error.options.message
                            } );
                        }

                        resolve( cmErrors );
                    } );
                } );
            };
        })();
    }
};

/**
 * Accessibility Enhancements, run on page load
 */

// when expanding the nav menu via button click or kayboard, focus the first item in the menu
$("#t_TreeNav").on("theme42layoutchanged", function (event, obj) {
    if (obj.action === "expand" && $("#t_Button_navControl").is(":focus")) {
        setTimeout(() => {
            $("#t_TreeNav").treeView("setSelection", $("#t_TreeNav .a-TreeView-node").first(), true);
        }, 100);
    }
});

// within the nav menu, on Escape, collapse and focus the menu button
$("#t_TreeNav").on("keyup", function (e) {
    if (e.which == 27) {
        $("#t_Button_navControl").click();
    }
});

/*
* Editor Theme Logic
*/
$( "body" ).on( "theme-change", () => {
    if( typeof CodeEditor !== "undefined" ) {
        Object.keys( CodeEditor ).forEach( id => {
            CodeEditor[ id ].setOptions({
                theme: livesql.getPreferredEditorTheme()
            });
        } );
    }
} );