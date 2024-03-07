class so_document {
    width = 0;
    height = 0;
}

class so_abstractElement{
    parent = null;
    children = [];
    style = null;
}

class so_abstractValue{
    value = null;
    update = null;
    getValue(){
        return this.value;
    }
    setValue(value){
        this.value = value;
    }
}

class so_simpleValue extends so_abstractValue{
    constructor(value=""){
        super();
        this.value = value;
    }
}

class so_remoteValue extends so_abstractValue{
    remoteName = "";
    constructor(remoteName=""){
        super();
        this.remoteName = remoteName;
    }
}

class so_expressionValue extends so_abstractValue{
    expression = "";
    constructor(expression=""){
        super();
        this.expression = expression;
    }
    trigger(){
        this.setValue(eval(this.expression));
    }
}