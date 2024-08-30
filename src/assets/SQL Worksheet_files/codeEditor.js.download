/**
 * Editor Widget based on CodeMirror6
 */

const EditorView = CodeMirror["codemirror"].EditorView;
const { sql, PLSQL } = CodeMirror["@codemirror/lang-sql"];

const view = CodeMirror["@codemirror/view"];
const state = CodeMirror["@codemirror/state"];
const language = CodeMirror["@codemirror/language"];
const commands = CodeMirror["@codemirror/commands"];
const search = CodeMirror["@codemirror/search"];
const autocomplete = CodeMirror["@codemirror/autocomplete"];

const Compartment = CodeMirror["@codemirror/state"].Compartment;

const getClassFromTheme = ( theme ) => {
    return theme === "dark" ? "cm-dark" : "cm-light";
};

const getConfigurableExtensions = options => {
    const extensions = [];
    // theme
    if (options.theme === "dark") {
        extensions.push(CodeMirror["@codemirror/theme-one-dark"].oneDark);
    }

    extensions.push( EditorView.editorAttributes.of( { class: getClassFromTheme( options.theme ) } ) );

    // readOnly
    extensions.push(state.EditorState.readOnly.of(options.readOnly));
    // lineNumbers
    if (options.lineNumbers) {
        extensions.push(view.lineNumbers());
        extensions.push(language.foldGutter());
    }
    // closeBrackets
    if (options.closeBrackets) {
        extensions.push(autocomplete.closeBrackets());
    }

    return extensions;
};

class CodeEditor {

    #changeListeners = [];

    constructor(elementId, options = {}, mixins = []) {
        this.options = {
            language: "sql",
            theme: "light",
            readOnly: false,
            lineNumbers: true,
            closeBrackets: true,
            ...options
        };
        this.optionsCompartment = new Compartment;

        this.editorView = new EditorView({
            extensions: [
                //
                ...mixins,
                //
                this.optionsCompartment.of(getConfigurableExtensions(this.options)),
                //
                // view.keymap.of( [ commands.indentWithTab ] ),
                // Custom Tab behavior
                CodeMirror["@codemirror/language"].indentUnit.of( "    " ),
                view.keymap.of( [ { 
                    key: "Tab",
                    run: commands.insertTab,
                    shift: commands.indentLess
                } ] ),
                //
                EditorView.updateListener.of(v => {
                    if (v.docChanged && this.#changeListeners.length ) {
                        const content = v.state.doc.toString();
                        this.#changeListeners.forEach( ( changeListener ) => {
                            changeListener( content );
                        } );
                    }
                }),
                //
                view.highlightActiveLineGutter(),
                view.highlightSpecialChars(),
                commands.history(),
                view.drawSelection(),
                view.dropCursor(),
                state.EditorState.allowMultipleSelections.of(true),
                language.indentOnInput(),
                language.syntaxHighlighting(language.defaultHighlightStyle, { fallback: true }),
                language.bracketMatching(),
                //autocomplete.closeBrackets(),
                //autocomplete.autocompletion(),
                view.rectangularSelection(),
                view.crosshairCursor(),
                view.highlightActiveLine(),
                search.highlightSelectionMatches(),
                view.keymap.of([
                    //...autocomplete.closeBracketsKeymap,
                    ...commands.defaultKeymap,
                    ...search.searchKeymap,
                    ...commands.historyKeymap,
                    ...language.foldKeymap,
                    //...autocomplete.completionKeymap,
                    //...lint.lintKeymap
                ]),
                ... ( this.options.language === "sql" ? [ sql( { dialect: PLSQL } ) ] : [] )
            ],
            parent: document.getElementById(elementId)
        });

        CodeEditor[ elementId ] = this;
    }
    getValue() {
        return this.editorView.state.doc.toString();
    }
    setValue(value) {
        this.editorView.dispatch({
            changes: { from: 0, to: this.editorView.state.doc.length, insert: value }
        });
    }
    setOptions(options) {
        this.options = {
            ...this.options,
            ...options
        };
        this.editorView.dispatch({
            effects: this.optionsCompartment.reconfigure(getConfigurableExtensions(this.options))
        });
    }
    getSelection() {
        const state = this.editorView.state;
        return state.sliceDoc( state.selection.main.from, state.selection.main.to );
    }
    getEditor() {
        return this.editorView;
    }
    focus() {
        this.editorView.focus();
    }
    setCursorToEnd() {
        const endPosition = this.getValue().length;
        this.editorView.dispatch({selection: {anchor: endPosition, head: endPosition}});
    }
    onChange( callback ) {
        this.#changeListeners.push( callback );
    }
};

window.codeEditor = CodeEditor;