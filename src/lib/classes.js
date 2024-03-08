class so_document {
    width = 0;
    height = 0;
    elements = [];
    values = [];
}

class so_abstractStyle{
    width = so_simpleValue(0);
    height = so_simpleValue(0);
    positionX = so_simpleValue(0);
    positionY = so_simpleValue(0);
    background = so_simpleValue("transparent");
    color = so_simpleValue("black");
    fontSize = so_simpleValue(12);
    fontFamily = so_simpleValue("Arial");
    fontWeight = so_simpleValue("normal");
    fontStyle = so_simpleValue("normal");
    textAlign = so_simpleValue("left");
    textDecoration = so_simpleValue("none");
    lineHeight = so_simpleValue(12);
    letterSpacing = so_simpleValue(0);
    border = so_simpleValue("none");
    borderRadius = so_simpleValue(0);
    boxShadow = so_simpleValue("none");
    overflow = so_simpleValue("visible");
    zIndex = so_simpleValue(0);
    genCSS(){
        return `width:${this.width}px;height:${this.height}px;position:absolute;left:${this.positionX}px;top:${this.positionY}px;background-color:${this.background};color:${this.color};font-size:${this.fontSize}px;font-family:${this.fontFamily};font-weight:${this.fontWeight};font-style:${this.fontStyle};text-align:${this.textAlign};text-decoration:${this.textDecoration};line-height:${this.lineHeight}px;letter-spacing:${this.letterSpacing}px;border:${this.border};border-radius:${this.borderRadius}px;box-shadow:${this.boxShadow};overflow:${this.overflow};z-index:${this.zIndex};`;
    }
    update = new Event("update");
    triggerUpdate(){
        dispatchEvent(this.update);
    }
    constructor(){
        this.width.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.height.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.positionX.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.positionY.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.background.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.color.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.fontSize.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.fontFamily.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.fontWeight.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.fontStyle.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.textAlign.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.textDecoration.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.lineHeight.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.letterSpacing.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.border.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.borderRadius.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.boxShadow.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.overflow.addEventListener("update",(e)=>{this.triggerUpdate();});
        this.zIndex.addEventListener("update",(e)=>{this.triggerUpdate();});
    }
}

class so_abstractElement{
    parent = null;
    children = [];
    style = null;
}

class so_domElement extends so_abstractElement{
    domElement = null;
    constructor(){
        super();
        this.domElement = document.createElement("div");
    }
    updateStyle(){
        this.domElement.style = this.style.genCSS();
    }
}

class so_abstractValue{
    value = null;
    update = new Event("update");
    toString(){
        return this.value.toString();
    }
    getValue(){
        return this.value;
    }
    setValue(value){
        if(value==this.value) return;
        this.value = value;
        dispatchEvent(this.update);
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