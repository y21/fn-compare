class Comparator {
    constructor(first, second, count){
        this._evalInput = {
            left: first,
            right: second
        };
        this._evalOutput = {
            left: undefined,
            right: undefined
        };
        this._timestamps = {
            left: [],
            right: []
        };
        this._count = count || 1;
        this._fastest;
    }

    get evalInput(){
        return this._evalInput;
    }

    set evalInput(value){
        return this._evalInput = value;
    }

    get evalOutput(){
        return this._evalOutput;
    }

    set evalOutput(value){
        return this._evalOutput = value;
    }

    get timestamps(){
        return this._timestamps;
    }

    set timestamps(value){
        return this._timestamps = value;
    }

    get count(){
        return this._count;
    }

    set count(value){
        return this._count = value;
    }

    execute(count){
        if(typeof count !== 'undefined' && typeof count !== 'number' && typeof this.count !== 'number' && typeof this.count !== 'undefined') throw new Error('');
        
        // Left evaluation procedure
        this.timestamps.left[0] = Date.now();
        for(let i = 0; i < count || this.count; ++i){
            if(i == (count || this.count)) this.evalOutput.left = eval(this.evalInput.left);
            else eval(this.evalInput.left);
        }
        this.timestamps.left[1] = Date.now();

        // Right evaluation procedure
        this.timestamps.right[0] = Date.now();
        for(let i = 0; i < count || this.count; ++i){
            if(i == (count || this.count)) this.evalOutput.right = eval(this.evalOutput.right);
            else eval(this.evalInput.right)
        }
        this.timestamps.right[1] = Date.now();

        // Check what code is faster
        this.fastest = (this.timestamps.left[1]-this.timestamps.left[0]>this.timestamps.right[1]-this.timestamps.right[0]) ? 2 : 1;
    }
}