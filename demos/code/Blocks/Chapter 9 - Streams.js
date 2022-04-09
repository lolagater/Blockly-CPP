/** Author: Jacob Patzer
 *      Version: 0.1   
 */

/**Set the color of blocks to purple */
var fileHUE = 270;

/** input-Filestream initialization block */
Blockly.Blocks["inFS"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file input stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");
        /** Sets data structure to . */
        this.setDataStr("isVar", true);

        this.typeName_ = 'ifstream';

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
            .appendField('ifstream ')
            .appendField(new Blockly.FieldTextInput('name'), 'myStream')
            .setCheck(null);
        
    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateValues();
        this.allocateWarnings();
    },

    allocateValues: function () {
        //this.streamName = (this.getFieldValue('myStream'));
        this.getVar_ = this.getField("myStream").getText();
    },

    allocateWarnings: function () {
        var TT = "";

        //Check library starts
        //create an instance of C_Include
        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }
        //Check library end


        //Check if the block is within a scope
        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //
        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }
    }

}

Blockly.C["inFS"] = function(block) {
    var code ='ifstream ' + this.getVar_ + ';\n';
    return code;
}

/** output-Filestream initialization block */
Blockly.Blocks["outFS"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file output stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");
        this.setDataStr("isVar", true);

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
            .appendField('ofstream ')
            .appendField(new Blockly.FieldTextInput('name'), 'myStream')
            .setCheck(null);
        this.typeName_ = 'ofstream';

    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateValues();
        this.allocateWarnings();
    },

    allocateValues: function () {
        this.getVar_ = (this.getField('myStream').getText());
    },

    allocateWarnings: function () {
        var TT = "";

        //Check library starts
        //create an instance of C_Include
        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }
        //Check library end


        //Check if the block is within a scope
        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //
        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }
    }

}

Blockly.C["outFS"] = function(block) {
    var code ='ofstream ' + this.getVar_ + ';\n';
    return code;
}

/** Input String-stream initialization block */
Blockly.Blocks["iStream"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file output stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");
        this.setDataStr("isVar", true);
        this.typeName_ = 'isstream';

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
        .appendField('istringstream ')
        .appendField(new Blockly.FieldTextInput('name'), 'myStream')
        .setCheck(null);

    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateValues();
        this.allocateWarnings();
    },

    allocateValues: function () {
        this.getVar_ = this.getField("myStream").getText();
    },

    allocateWarnings: function () {
        var TT = "";

        //Check library starts
        //create an instance of C_Include
        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_sstream']);

        if (!libFound) {
            TT += "Error, <sstream> library must be included.\n";
        }
        //Check library end


        //Check if the block is within a scope
        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //
        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }
    }

}

Blockly.C["iStream"] = function(block) {
    var code ='istringstream ' + this.getVar_ + ';\n';
    return code;
}

Blockly.Blocks["oStream"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file output stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");
        this.setDataStr("isVar", true);
        this.typeName_ = 'osstream';

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
            .appendField('ostringstream ')
            .appendField(new Blockly.FieldTextInput('name'), 'myStream')
            .setCheck(null);

    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateValues();
        this.allocateWarnings();
    },

    allocateValues: function () {
        this.getVar_ = this.getField("myStream").getText();
    },

    allocateWarnings: function () {
        var TT = "";

        //Check library starts
        //create an instance of C_Include
        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_sstream']);

        if (!libFound) {
            TT += "Error, <sstream> library must be included.\n";
        }
        //Check library end


        //Check if the block is within a scope
        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //
        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }
    }

}

Blockly.C["oStream"] = function(block) {
    var code = 'ostringstream ' + this.getVar_ + ';\n';

    return code;
}




Blockly.Blocks["FS_Open"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file input stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");

        this.setInputsInline(true);

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
            .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'fsName')
            .appendField('.open(');
        this.appendDummyInput()
            .appendField(')');
    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";
        
        let librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },

    allocateDropdown: function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "ifstream" ||  ptr.typeName_ == "ofstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
		this.parentClass_ = [];
        this.getVar_ = this.getField("fsName").getText();
		this.parentClass_.push(this.getVar_);
    }

}

Blockly.C["FS_Open"] = function(block) {
    var value_name = Blockly.C.valueToCode(block, 'valinp1', Blockly.C.ORDER_ATOMIC);
    var code = this.getVar_ + '.open(' + value_name + ')';
    return code + ';\n';
}

Blockly.Blocks["FS_Close"] = {
    init: function () {
        /** Adds a notch to connect up. */
        this.setPreviousStatement(true, null);
        /** Adds a notch to connect down. */
        this.setNextStatement(true, null);
        /** Sets color of the block. */
        this.setColour(fileHUE);
        /** This tooltip text appears when hovering block. */
        this.setTooltip("This block declares an file input stream.");
        /** The Help URL directs to hyperlink when a block is right clicked and Help is selected. */
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");

        /** parameter area */
        this.appendValueInput('valinp1') /** name of filestream */
            .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'fsName')
            .appendField('.close()');
    
    },

    /** The onchange function is called when a block is moved or updated. */
    onchange: function () {
        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";
        
        let librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },

    allocateDropdown : function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "ifstream" ||  ptr.typeName_ == "ofstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
        this.parentClass_ = [];
        this.getVar_ = this.getField("fsName").getText();
		this.parentClass_.push(this.getVar_);
    }

}

Blockly.C["FS_Close"] = function(block) {
    var value_name = Blockly.C.valueToCode(block, 'valinp1', Blockly.C.ORDER_ATOMIC);
    var code = this.getVar_ + '.close(' + value_name + ')';

    return code + ';\n';
}

Blockly.Blocks['FS_stream_mutator'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('print');
        this.appendStatementInput('STACK');

        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['FS_stream_add'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('add');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['FS_input'] = {
    init: function () {

        this.appendValueInput("valinp0")
            .setCheck(this.setFSCheck)
            .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'fsName')
            .appendField(">>")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(fileHUE);
        this.setTooltip("Grabs input from file.\nRequires - <fstream>");
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");

        this.setMutator(new Blockly.Mutator(['FS_stream_add']));

        this.FSStreamCount_ = 0;

        this.setFSCheck = 'Variable';

    },

    mutationToDom: function () {
        if (!this.FSStreamCount_) {
            return null;
        }
        var container = document.createElement('mutation');

        if (this.FSStreamCount_) {
            container.setAttribute('printadd', this.FSStreamCount_);
        }

        return container;
    },

    domToMutation: function (xmlElement) {
        this.FSStreamCount_ = parseInt(xmlElement.getAttribute('printadd'), 10);
        for (var i = 1; i <= this.FSStreamCount_; i++) {
            this.appendValueInput('valinp' + i).setCheck(this.setFSCheck).appendField(' >> ').setAlign(Blockly.ALIGN_RIGHT);
        }
    },

    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('FS_stream_mutator');
        containerBlock.initSvg();

        var connection = containerBlock.getInput('STACK').connection;

        for (var i = 1; i <= this.FSStreamCount_; ++i) {
            var add = workspace.newBlock('FS_stream_add');
            add.initSvg();

            console.log(this.FSStreamCount_);
            connection.connect(add.previousConnection);
            connection = add.nextConnection;
        }
        return containerBlock;
    },

    compose: function (containerBlock) {
        for (var i = this.FSStreamCount_; i > 0; i--) {
            this.removeInput('valinp' + i);
        }
        this.FSStreamCount_ = 0;

        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {

            switch (clauseBlock.type) {

                case 'FS_stream_add':
                    this.FSStreamCount_++;
                    var printInput = this.appendValueInput('valinp' + this.FSStreamCount_)
                        .setCheck(this.setFSCheck).appendField(' >> ').setAlign(Blockly.ALIGN_RIGHT);

                    if (clauseBlock.valueConnection_) {
                        printInput.connection.connect(clauseBlock.valueConnection_);
                    }

                    break;

                default:
                    throw 'Unknown block type.';
            }

            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;
        while (clauseBlock) {

            switch (clauseBlock.type) {

                case 'FS_stream_add':
                    var inputPrint = this.getInput('valinp' + i);
                    clauseBlock.valueConnection_ = inputPrint && inputPrint.connection.targetConnection;
                    clauseBlock.statementConnection_ = i++;
                    break;

                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
    },

    onchange: Blockly.Blocks.requireInFunction,

    onchange: function () {
        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";

        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },
    customContextMenu: function (options) {
        //save the current scope
        let BlockScope = this;

        var librarySearch = C_Include;
        var libFound = librarySearch.search_library(this, ['include_fstream']);

        //create an initialization block
        if (!libFound) {

            automate_library_string = {
                text: "include <fstream>",
                enabled: true,

                callback: function () {
                    var newBlock = BlockScope.workspace.newBlock('include_fstream');
                    let ptr = BlockScope;

                    while (ptr) {
                        //if we're at the top
                        if (!ptr.parentBlock_) {
                            newBlock.previousConnection.connect(ptr.previousConnection.targetConnection);
                            newBlock.nextConnection.connect(ptr.previousConnection);
                            newBlock.initSvg();
                            newBlock.render();

                            return;
                        }

                        ptr = ptr.parentBlock_;
                    }

                }

            }
            options.push(automate_library_string);

        }
    },

    allocateDropdown: function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "ifstream" ||  ptr.typeName_ == "ofstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
		this.parentClass_ = [];
        this.getVar_ = this.getField("fsName").getText();
		this.parentClass_.push(this.getVar_);
    }

};

Blockly.C['FS_input'] = function (block) {
    var val = Blockly.C.valueToCode(block, 'valinp0', Blockly.C.ORDER_NONE);
    // TODO: Assemble C into code variable.
    var code = '';
    var std = '';
    var WT = false;
    //tooltip for warning text

    C = C_Include;
    if (!C.using.std(block)) {
        std = 'std::';
    }

    if (this.FSStreamCount_ < 1 && !val) {
        WT = true;
    } else if (this.FSStreamCount_ < 1 && val) {
        code += this.getVar_ + ' >> ' + val;
    } else if (this.FSStreamCount_ > 0 && !val) {
        WT = true;
        console.log(WT);
    } else {

        code += this.getVar_ + ' >> ' + val;

        for (var i = 1; i <= this.FSStreamCount_; ++i) {
            var arg = Blockly.C.valueToCode(block, 'valinp' + i, Blockly.C.ORDER_NONE);
            var childConnection = this.inputList[i].connection;
            var childBlock = childConnection.targetBlock();


            if (childBlock) {
                code += ' >> ' + arg;
            } else {
                WT = true;
            }
        }
    }

    this.setWarningText(null);
    if (WT == true) {
        this.setWarningText("Block warning: all FS inputs must be attached to a variable block.");
    }

    if (code.length > 0) {
        code += ';\n';
    }

    return code;
};

Blockly.Blocks['oFS_stream_mutator'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('print');
        this.appendStatementInput('STACK');

        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['oFS_stream_add'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('add');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['FS_output'] = {
    init: function () {

        this.appendValueInput("valinp0")
            .setCheck(this.setFSCheck)
            .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'fsName')
            .appendField("<<")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(fileHUE);
        this.setTooltip("outputs to file.\nRequires - <fstream>");
        this.setHelpUrl("https://www.cplusplus.com/doc/tutorial/files/");

        this.setMutator(new Blockly.Mutator(['oFS_stream_add']));

        this.oFSStreamCount_ = 0;

        this.setFSCheck = 'Variable';

    },

    mutationToDom: function () {
        if (!this.oFSStreamCount_) {
            return null;
        }
        var container = document.createElement('mutation');

        if (this.oFSStreamCount_) {
            container.setAttribute('printadd', this.oFSStreamCount_);
        }

        return container;
    },

    domToMutation: function (xmlElement) {
        this.oFSStreamCount_ = parseInt(xmlElement.getAttribute('printadd'), 10);
        for (var i = 1; i <= this.oFSStreamCount_; i++) {
            this.appendValueInput('valinp' + i).setCheck(this.setFSCheck).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);
        }
    },

    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('oFS_stream_mutator');
        containerBlock.initSvg();

        var connection = containerBlock.getInput('STACK').connection;

        for (var i = 1; i <= this.oFSStreamCount_; ++i) {
            var add = workspace.newBlock('oFS_stream_add');
            add.initSvg();

            console.log(this.oFSStreamCount_);
            connection.connect(add.previousConnection);
            connection = add.nextConnection;
        }
        return containerBlock;
    },

    compose: function (containerBlock) {
        for (var i = this.oFSStreamCount_; i > 0; i--) {
            this.removeInput('valinp' + i);
        }
        this.oFSStreamCount_ = 0;

        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {

            switch (clauseBlock.type) {

                case 'oFS_stream_add':
                    this.oFSStreamCount_++;
                    var printInput = this.appendValueInput('valinp' + this.oFSStreamCount_)
                        .setCheck(this.setFSCheck).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);

                    if (clauseBlock.valueConnection_) {
                        printInput.connection.connect(clauseBlock.valueConnection_);
                    }

                    break;

                default:
                    throw 'Unknown block type.';
            }

            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;
        while (clauseBlock) {

            switch (clauseBlock.type) {

                case 'oFS_stream_add':
                    var inputPrint = this.getInput('valinp' + i);
                    clauseBlock.valueConnection_ = inputPrint && inputPrint.connection.targetConnection;
                    clauseBlock.statementConnection_ = i++;
                    break;

                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
    },

    onchange: Blockly.Blocks.requireInFunction,

    onchange: function () {

        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";

        var librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_fstream']);

        if (!libFound) {
            TT += "Error, <fstream> library must be included.\n";
        }

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },
    customContextMenu: function (options) {
        //save the current scope
        let BlockScope = this;

        var librarySearch = C_Include;
        var libFound = librarySearch.search_library(this, ['include_fstream']);

        //create an initialization block
        if (!libFound) {

            automate_library_string = {
                text: "include <fstream>",
                enabled: true,

                callback: function () {
                    var newBlock = BlockScope.workspace.newBlock('include_fstream');
                    let ptr = BlockScope;

                    while (ptr) {
                        //if we're at the top
                        if (!ptr.parentBlock_) {
                            newBlock.previousConnection.connect(ptr.previousConnection.targetConnection);
                            newBlock.nextConnection.connect(ptr.previousConnection);
                            newBlock.initSvg();
                            newBlock.render();

                            return;
                        }

                        ptr = ptr.parentBlock_;
                    }

                }

            }
            options.push(automate_library_string);

        }
    },

    allocateDropdown : function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "ifstream" ||  ptr.typeName_ == "ofstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
        this.parentClass_ = [];
        this.getVar_ = this.getField("fsName").getText();
		this.parentClass_.push(this.getVar_);
    }

};

Blockly.C['FS_output'] = function (block) {
    var val = Blockly.C.valueToCode(block, 'valinp0', Blockly.C.ORDER_NONE);
    // TODO: Assemble C into code variable.
    var code = '';
    var std = '';
    var WT = false;
    //tooltip for warning text

    C = C_Include;
    if (!C.using.std(block)) {
        std = 'std::';
    }

    if (this.oFSStreamCount_ < 1 && !val) {
        WT = true;
    } else if (this.oFSStreamCount_ < 1 && val) {
        code += this.getVar_ + ' << ' + val;
    } else if (this.oFSStreamCount_ > 0 && !val) {
        WT = true;
    } else {

        code += this.getVar_ + ' << ' + val;

        for (var i = 1; i <= this.oFSStreamCount_; ++i) {
            var arg = Blockly.C.valueToCode(block, 'valinp' + i, Blockly.C.ORDER_NONE);
            var childConnection = this.inputList[i].connection;
            var childBlock = childConnection.targetBlock();


            if (childBlock) {
                code += ' << ' + arg;
            } else {
                WT = true;
            }
        }
    }

    this.setWarningText(null);
    if (WT == true) {
        this.setWarningText("Block warning: all FS inputs must be attached to a variable block.");
    }

    if (code.length > 0) {
        code += ';\n';
    }

    return code;
};

Blockly.Blocks['outSS_stream_mutator'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('print');
        this.appendStatementInput('STACK');

        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['outSS_stream_add'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('add');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['outSS'] = {
    init: function () {
        this.appendValueInput("valinp0")
        .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'ssName')
        .appendField("<<");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(fileHUE);

        this.setMutator(new Blockly.Mutator(['outSS_stream_add']));

        //count of added outSS's in the stream
        this.outSStreamCount_ = 0;
    },

    mutationToDom: function () {
        if (!this.outSStreamCount_) {
            return null;
        }
        var container = document.createElement('mutation');

        if (this.outSStreamCount_) {
            container.setAttribute('printadd', this.outSStreamCount_);
        }

        return container;
    },

    domToMutation: function (xmlElement) {
        this.OutSStreamCount_ = parseInt(xmlElement.getAttribute('printadd'), 10);
        for (var i = 1; i <= this.outSStreamCount_; ++i) {
            this.appendValueInput('valinp' + i).setCheck(null).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);
        }
    },

    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('outSS_stream_mutator');
        containerBlock.initSvg();

        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 1; i <= this.outSStreamCount_; ++i) {
            var add = workspace.newBlock('outSS_stream_add');
            add.initSvg();

            connection.connect(add.previousConnection);
            connection = add.nextConnection;
        }

        return containerBlock;
    },

    compose: function (containerBlock) {
        for (var i = this.outSStreamCount_; i > 0; i--) {
            this.removeInput('valinp' + i);
        }
        this.outSStreamCount_ = 0;

        var clauseBlock = containerBlock.getInputTargetBlock('STACK');

        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'outSS_stream_add':
                    this.outSStreamCount_++;

                    var printInput = this.appendValueInput('valinp' + this.outSStreamCount_)
                        .setCheck(null).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);

                    if (clauseBlock.valueConnection_) {
                        printInput.connection.connect(clauseBlock.valueConnection_);
                    }
                    break;

                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;
        while (clauseBlock) {

            switch (clauseBlock.type) {

                case 'outSS_stream_add':

                    var inputPrint = this.getInput('valinp' + i);

                    clauseBlock.valueConnection_ = inputPrint && inputPrint.connection.targetConnection;

                    clauseBlock.statementConnection_ = i++;

                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    onchange: function () {
        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";

        //Cout type check

        //Library Check
        let librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_sstream']);

        if (!libFound) {
            TT += "Error, <sstream> library must be included.\n";
        }

        //Libary check end

        //Check if this block is in a proper scope

        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //Proper scope end

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },
    // Hao: Add iostream for cin
    customContextMenu: function (options) {
        //save the current scope
        let BlockScope = this;

        var librarySearch = C_Include;
        var libFound = librarySearch.search_library(this, ['include_sstream']);

        //create an initialization block
        if (!libFound) {

            automate_library_string = {
                text: "include <sstream>",
                enabled: true,

                callback: function () {
                    var newBlock = BlockScope.workspace.newBlock('include_sstream');
                    let ptr = BlockScope;

                    while (ptr) {
                        //if we're at the top
                        if (!ptr.parentBlock_) {
                            newBlock.previousConnection.connect(ptr.previousConnection.targetConnection);
                            newBlock.nextConnection.connect(ptr.previousConnection);
                            newBlock.initSvg();
                            newBlock.render();

                            return;
                        }

                        ptr = ptr.parentBlock_;
                    }

                }

            }
            options.push(automate_library_string);

        }
    },

    allocateDropdown: function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "osstream" ||  ptr.typeName_ == "isstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
		this.parentClass_ = [];
        this.getVar_ = this.getField("ssName").getText();
		this.parentClass_.push(this.getVar_);
    }

};

Blockly.C['outSS'] = function (block) {
    var code = '';
    var std = '';

    C = C_Include;

    if (!C.using.std(block)) {
        std = 'std::';
    }
    
    code += this.getVar_;

    for (var i = 0; i <= block.outSStreamCount_; ++i) {
        var arg = Blockly.C.valueToCode(block, 'valinp' + i, Blockly.C.ORDER_NONE);

        if (arg.length > 0) {
            code += ' << ' + arg;
        } else {
            code += ' << ' + std + 'endl';
        }

    }


    code += ';\n';
    return code;
};

Blockly.Blocks['inSS_stream_mutator'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('print');
        this.appendStatementInput('STACK');

        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['inSS_stream_add'] = {
    init: function () {
        this.setColour(fileHUE);
        this.appendDummyInput().appendField('add');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.contextMenu = false;
    }
};

Blockly.Blocks['inSS'] = {
    init: function () {
        this.appendValueInput("valinp0")
            .appendField(new Blockly.FieldDropdown(this.allocateDropdown.bind(this)), 'ssName')
            .appendField(">>");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(fileHUE);

        this.setMutator(new Blockly.Mutator(['inSS_stream_add']));

        //count of added inSS's in the stream
        this.inSStreamCount_ = 0;
    },

    mutationToDom: function () {
        if (!this.inSStreamCount_) {
            return null;
        }
        var container = document.createElement('mutation');

        if (this.inSStreamCount_) {
            container.setAttribute('printadd', this.inSStreamCount_);
        }

        return container;
    },

    domToMutation: function (xmlElement) {
        this.inSStreamCount_ = parseInt(xmlElement.getAttribute('printadd'), 10);
        for (var i = 1; i <= this.inSStreamCount_; ++i) {
            this.appendValueInput('valinp' + i).setCheck(null).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);
        }
    },

    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('inSS_stream_mutator');
        containerBlock.initSvg();

        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 1; i <= this.inSStreamCount_; ++i) {
            var add = workspace.newBlock('inSS_stream_add');
            add.initSvg();

            connection.connect(add.previousConnection);
            connection = add.nextConnection;
        }

        return containerBlock;
    },

    compose: function (containerBlock) {
        for (var i = this.inSStreamCount_; i > 0; i--) {
            this.removeInput('valinp' + i);
        }
        this.inSStreamCount_ = 0;

        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {

            switch (clauseBlock.type) {
            
                case 'inSS_stream_add':
                    this.inSStreamCount_++;

                    var printInput = this.appendValueInput('valinp' + this.inSStreamCount_)
                        .setCheck(null).appendField(' << ').setAlign(Blockly.ALIGN_RIGHT);

                    if (clauseBlock.valueConnection_) {
                        printInput.connection.connect(clauseBlock.valueConnection_);
                    }

                    break;

                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'inSS_stream_add':
                    var inputPrint = this.getInput('valinp' + i);

                    clauseBlock.valueConnection_ = inputPrint && inputPrint.connection.targetConnection;

                    clauseBlock.statementConnection_ = i++;

                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection
                && clauseBlock.nextConnection.targetBlock();
        }
    },

    onchange: function () {
        this.allocateWarnings();
        this.allocateDropdown();
        this.allocateValues();
    },

    allocateWarnings: function () {
        var TT = "";

        //Cout type check

        //Library Check
        let librarySearch = C_Include;

        var libFound = librarySearch.search_library(this, ['include_sstream']);

        if (!libFound) {
            TT += "Error, <sstream> library must be included.\n";
        }

        //Libary check end

        //Check if this block is in a proper scope

        let Scope = C_Scope;

        if (!Scope.node.is_in_scope(this, ['isFunc'])) {
            TT += "Error, this block must be inside of a function or main.\n";
        }

        //Proper scope end

        if (TT.length > 0) {
            this.setWarningText(TT);
        } else {
            this.setWarningText(null);
        }

    },
    // Hao: Add iostream for cin
    customContextMenu: function (options) {
        //save the current scope
        let BlockScope = this;

        var librarySearch = C_Include;
        var libFound = librarySearch.search_library(this, ['include_sstream']);

        //create an initialization block
        if (!libFound) {

            automate_library_string = {
                text: "include <sstream>",
                enabled: true,

                callback: function () {
                    var newBlock = BlockScope.workspace.newBlock('include_sstream');
                    let ptr = BlockScope;

                    while (ptr) {
                        //if we're at the top
                        if (!ptr.parentBlock_) {
                            newBlock.previousConnection.connect(ptr.previousConnection.targetConnection);
                            newBlock.nextConnection.connect(ptr.previousConnection);
                            newBlock.initSvg();
                            newBlock.render();

                            return;
                        }

                        ptr = ptr.parentBlock_;
                    }

                }

            }
            options.push(automate_library_string);

        }
    },

    allocateDropdown: function () {
        var options = [["",""]];

        let ptr = this.parentBlock_;

        while (ptr) {
            if (ptr.getDataStr() === "isVar" && (ptr.typeName_ == "osstream" ||  ptr.typeName_ == "isstream")) {
                    options.push([ptr.getVar_, ptr.getVar_]);
            }
            ptr = ptr.parentBlock_;
        }
        return options;
    },

    allocateValues: function () {
		this.parentClass_ = [];
        this.getVar_ = this.getField("ssName").getText();
		this.parentClass_.push(this.getVar_);
    }


};

Blockly.C['inSS'] = function (block) {
    var code = '';
    var std = '';

    C = C_Include;

    if (!C.using.std(block)) {
        std = 'std::';
    }

    code += this.getVar_;

    for (var i = 0; i <= block.inSStreamCount_; ++i) {
        var arg = Blockly.C.valueToCode(block, 'valinp' + i, Blockly.C.ORDER_NONE);

        if (arg.length > 0) {
            code += ' << ' + arg;
        } else {
            code += ' << ' + std + 'endl';
        }

    }


    code += ';\n';
    return code;
};

Blockly.Blocks['insertionOverload'] = {
    init: function() {
        this.appendValueInput("operatorBlock")
            .setCheck("isClass")
            .appendField("null", "className1")
            .appendField("&")
            .appendField("null", "className2")
            .appendField("::operator<<(");
        this.appendDummyInput()
            .appendField(") {");
        this.appendStatementInput("statementInput")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(fileHUE);
        this.setTooltip("allows for an insertion overload to be defined");
        this.setHelpUrl("");
        this.setDataStr('isFunc', true);

        this.paramCount_ = 0;

    },
    
    onchange : function () {
        this.allocateValues()
        this.allocateWarnings()
    },

    allocateValues : function () {
        let ptr = this.getSurroundParent();
        
        if (ptr != null && ptr.getDataStr() == "isClass") {
            this.getVar_ = ptr.getVar_;
            this.setFieldValue(this.getVar_, "className1");
            this.setFieldValue(this.getVar_, "className2");
        } else {
            this.setFieldValue("null", "className1");
            this.setFieldValue("null", "className2");
        }

    },

    allocateWarnings: function() {
        let warn = "";
        let ptr = this.getSurroundParent();
    
        if ((ptr) && (ptr.getDataStr() !== "isClass")) {
          warn += "Error, operator must be defined in a class.";
        }
    
        if (this.parentBlock_ === null) {
          warn += "Error, operator must be defined in a class.";
        }
    
        if (warn.length > 0) {
          this.setWarningText(warn);
        } else {
          this.setWarningText(null);
        }

        let inputBlock = this.getInputTargetBlock('valueInput');
        while (inputBlock) {

            if (inputBlock.type !== "function_parameters" && inputBlock.type !== "pointer_operator" && inputBlock.type !== "class_parameters" && inputBlock.type !== "class_function_definition") {
                TT += 'Error, only the function parameter block is allowed in the function parameter.\n';
                break;
            }

            inputBlock = inputBlock.childBlocks_[0];
        }

      }

  };
    

  Blockly.C['insertionOverload'] = function (block) {

    let valueInput = Blockly.C.valueToCode(block, 'valueInput', Blockly.C.ORDER_ATOMIC);
    let statementInput = Blockly.C.statementToCode(block, 'statementInput');
    let code = '';

    if (!block.isConstructor_ && !block.isDestructor_) {
        if (block.isConst_) {
            code += "const ";
        }

        if (block.type_ === "string" && !C_Include.using.std(block)) {
            code += "std::";
        }
    }

    code += this.getVar_ + "& " + this.getVar_ + "::operator<<(" + valueInput + ") {\n"
        + statementInput
        + "}\n";

    return code;

  }


    