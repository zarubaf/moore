initSidebarItems({"constant":[["DUMMY_NODE_ID","During parsing and syntax tree construction, we assign each node this ID. Only later, during the renumbering pass do we assign actual IDs to each node."]],"enum":[["AssignKind",""],["AssignMode",""],["AssignTarget",""],["AttrData",""],["AttrTarget",""],["BinaryOp",""],["BlockCompSpec",""],["CtxItem","A context item, multiple of which make up a context clause."],["DeclItem","A declarative item."],["DelayMech",""],["DesignUnitData",""],["Dir",""],["DisconTarget",""],["EntityAspect",""],["EntityClass",""],["ExprData","The data associated with a specific expression."],["ForceMode",""],["GroupData",""],["InstTarget",""],["IntfDecl","An interface declaration."],["IntfMode",""],["IntfObjKind",""],["LogicalOp",""],["LoopScheme",""],["NamePart",""],["NexitMode",""],["ObjDetail","Additional mutually exclusive details that may be provided with an object declaration."],["ObjKind",""],["PortgenKind",""],["PrimaryNameKind",""],["RelationalOp",""],["ResolInd",""],["SelectAssignMode",""],["Sensitivity",""],["ShiftOp",""],["Sign",""],["StmtData",""],["SubprogData",""],["SubprogDefault",""],["SubprogKind",""],["SubprogPurity",""],["TypeData",""],["UnaryOp",""]],"struct":[["AliasDecl","An alias declaration."],["ArchBody","An architecture body."],["AttrDecl",""],["BindingInd",""],["BlockCompCfg",""],["CfgDecl","A configuration declaration."],["CfgSpec",""],["CompDecl","A component declaration."],["CompoundName","A compound name consisting of a primary name (identifier, character literal, or string literal), and zero or more suffices (select, attribute, call). The names in IEEE 1076-2008 section 8.1 map to this as follows:"],["CondWave","A conditional wave."],["CtxDecl","A context declaration."],["DesignUnit","A design unit. Multiple design units make up a design file. Each unit consists of an optional context clause followed by a primary or secondary unit."],["DisconSpec",""],["EntityDecl","An entity declaration."],["Expr","An expression."],["GenBody",""],["GroupDecl",""],["Ident","An identifier. Has a node ID such that it may be referenced later on."],["IntfObjDecl","An interface object declaration."],["IntfSubprogDecl",""],["NodeId","A positive, small ID assigned to each node in the AST. Used as a lightweight way to refer to individual nodes, e.g. during symbol table construction and name resolution."],["ObjDecl",""],["ParenElem","A parenthesized expression element. A parenthesized expression contains elements of which each may either be a simple `<expr>`, or an association of the form `<choices> => <expr>`."],["PkgBody","A package body."],["PkgDecl","A package declaration."],["PkgInst","A package instantiation declaration."],["PrimaryName",""],["SelectWave","A selected wave. The second element of the tuple represents the choices for which this wave would be selected."],["Signature",""],["Stmt",""],["StmtBody","The body of an if, loop, or case statement."],["Subprog",""],["SubprogSpec",""],["SubtypeDecl",""],["SubtypeInd",""],["TypeDecl","A type declaration. If the `data` field is omitted, this is an incomplete declaration."],["Wave",""]],"type":[["Choices",""],["ParenElems","A vector of parenthesized expression elements, including the span of the expression that this would cover."]]});