(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[1505],{11505:function(t,e,i){"use strict";i.r(e),i.d(e,{GridListDynamicExample:function(){return z},GridListExamplesModule:function(){return b},GridListHarnessExample:function(){return I},GridListOverviewExample:function(){return $}});var s=i(61116),r=i(35366),n=i(87064),o=i(19861),l=i(94720);const a=["*"],h=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],c=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],g=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";class d{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(t){const e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new u(this.rowIndex,e)}_findMatchingGap(t){let e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):(e=this.tracker.indexOf(0,this.columnIndex),-1!=e?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)))}while(i-e<t||0==i);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length}_markTilePosition(t,e){for(let i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}}class u{constructor(t,e){this.row=t,this.col=e}}const p=new r.OlP("MAT_GRID_LIST");let m=(()=>{class t{constructor(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,o.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,o.su)(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(p,8))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,e){2&t&&r.uIk("rowspan",e.rowspan)("colspan",e.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:a,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"div",0),r.Hsn(1),r.qZA())},styles:[g],encapsulation:2,changeDetection:0}),t})(),_=(()=>{class t{constructor(t){this._element=t}ngAfterContentInit(){(0,n.E0)(this._lines,this._element)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(t,e,i){if(1&t&&r.Suo(i,n.X2,5),2&t){let t;r.iGM(t=r.CRH())&&(e._lines=t)}},ngContentSelectors:c,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(t,e){1&t&&(r.F$t(h),r.Hsn(0),r.TgZ(1,"div",0),r.Hsn(2,1),r.qZA(),r.Hsn(3,2))},encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["mat-grid-tile-footer"]],hostAttrs:[1,"mat-grid-tile-footer"]}),t})();const x=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class S{constructor(){this._rows=0,this._rowspan=0}init(t,e,i,s){this._gutterSize=k(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=s}getBaseTileSize(t,e){return`(${t}% - (${this._gutterSize} * ${e}))`}getTilePosition(t,e){return 0===e?"0":H(`(${t} + ${this._gutterSize}) * ${e}`)}getTileSize(t,e){return`(${t} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(t,e,i){let s=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,i,s,r),this.setRowStyles(t,e,s,r)}setColStyles(t,e,i,s){let r=this.getBaseTileSize(i,s);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,e)),t._setStyle("width",H(this.getTileSize(r,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class y extends S{constructor(t){super(),this.fixedRowHeight=t}init(t,e,i,s){super.init(t,e,i,s),this.fixedRowHeight=k(this.fixedRowHeight),x.test(this.fixedRowHeight)}setRowStyles(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",H(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",H(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class T extends S{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,e,i,s){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,s),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",H(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",H(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const e=t.split(":");this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}class Z extends S{setRowStyles(t,e){let i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",H(this.getTileSize(i,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function H(t){return`calc(${t})`}function k(t){return t.match(/([A-Za-z%]+)$/)?t:t+"px"}let A=(()=>{class t{constructor(t,e){this._element=t,this._dir=e,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,o.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=""+(null==t?"":t)}get rowHeight(){return this._rowHeight}set rowHeight(t){const e=""+(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new Z:t&&t.indexOf(":")>-1?new T(t):new y(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new d);const t=this._tileCoordinator,e=this._tiles.filter(t=>!t._gridList||t._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,i),e.forEach((e,i)=>{const s=t.positions[i];this._tileStyler.setStyle(e,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(l.Is,8))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-grid-list"]],contentQueries:function(t,e,i){if(1&t&&r.Suo(i,m,5),2&t){let t;r.iGM(t=r.CRH())&&(e._tiles=t)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,e){2&t&&r.uIk("cols",e.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[r._Bn([{provide:p,useExisting:t}])],ngContentSelectors:a,decls:2,vars:0,template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"div"),r.Hsn(1),r.qZA())},styles:[g],encapsulation:2,changeDetection:0}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.uc,n.BQ],n.uc,n.BQ]}),t})();function C(t,e){if(1&t&&(r.TgZ(0,"mat-grid-tile",2),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.Udp("background",t.color),r.Q6J("colspan",t.cols)("rowspan",t.rows),r.xp6(1),r.hij(" ",t.text," ")}}let z=(()=>{class t{constructor(){this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["grid-list-dynamic-example"]],decls:2,vars:1,consts:[["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(t,e){1&t&&(r.TgZ(0,"mat-grid-list",0),r.YNc(1,C,2,5,"mat-grid-tile",1),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngForOf",e.tiles))},directives:[A,s.sg,m],encapsulation:2}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["grid-list-overview-example"]],decls:9,vars:0,consts:[["cols","2","rowHeight","2:1"]],template:function(t,e){1&t&&(r.TgZ(0,"mat-grid-list",0),r.TgZ(1,"mat-grid-tile"),r._uU(2,"1"),r.qZA(),r.TgZ(3,"mat-grid-tile"),r._uU(4,"2"),r.qZA(),r.TgZ(5,"mat-grid-tile"),r._uU(6,"3"),r.qZA(),r.TgZ(7,"mat-grid-tile"),r._uU(8,"4"),r.qZA(),r.qZA())},directives:[A,m],styles:["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["grid-list-harness-example"]],decls:14,vars:0,consts:[["cols","2","rowHeight","100px"],["colspan","2"]],template:function(t,e){1&t&&(r.TgZ(0,"mat-grid-list",0),r.TgZ(1,"mat-grid-tile"),r._uU(2,"Tile 1 (no header, no footer)"),r.qZA(),r.TgZ(3,"mat-grid-tile"),r.TgZ(4,"mat-grid-tile-header"),r._uU(5,"Tile 2"),r.qZA(),r.qZA(),r.TgZ(6,"mat-grid-tile",1),r.TgZ(7,"mat-grid-tile-header"),r._uU(8,"Tile 3"),r.qZA(),r.TgZ(9,"mat-grid-tile-footer"),r._uU(10,"Tile 3 footer"),r.qZA(),r.qZA(),r.TgZ(11,"mat-grid-tile"),r.TgZ(12,"mat-grid-tile-header"),r._uU(13,"Tile 4"),r.qZA(),r.qZA(),r.qZA())},directives:[A,m,_,f,w],encapsulation:2}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.ez,v]]}),t})()}}]);