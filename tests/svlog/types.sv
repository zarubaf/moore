module A;
	bit a0;
	int a1;

	logic b0;
	integer b1;

	// enum {
	// 	Foo, Bar
	// } c0;
	// enum int {
	// 	Baz, Buz
	// } c1;
	struct {
		logic a;
		int b;
		struct {
			bit x;
			integer y;
		} c;
	} c2;
endmodule