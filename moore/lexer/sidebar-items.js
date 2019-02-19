initSidebarItems({"struct":[["AccumulatingReader",""],["BufferedLexer","A buffered lexer that allows tokens to be peeked at before they are actually consumed."],["StackedLexer","A lexer chaining the tokens of multiple other lexers after another. Lexers can be pushed onto an internal stack and will then be queried for tokens until their respective Eof has been reached. At that point, the lexer is popped off the stack and the next lexer's tokens are produced. An Eof is returned once all lexers have been drained."],["StringReader",""]],"trait":[["Lexer","A trait that can supply a stream of tokens."],["Reader","A trait that can supply a peekable stream of characters."]]});