// Copyright (c) 2017-2019 Fabian Schuiki

//! This crate implements parsing SystemVerilog source files into an abstract
//! syntax tree and resolving the encountered names.

pub mod ast;
pub mod cat;
pub mod lexer;
pub mod parser;
pub mod preproc;
pub mod token;
