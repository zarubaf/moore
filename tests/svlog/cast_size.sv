module A;
	initial begin
		tmp = 64'({NumRepl{lfsr_q}});
	end
endmodule

//@ elab A
