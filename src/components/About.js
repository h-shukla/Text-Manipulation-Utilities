export default function About(props) {
    let textSwitch = props.mode==='light'&&props.greenMode===false?'dark':'light';
    let backgroundSwitch = props.mode==='light'&&props.greenMode===false?'light':'dark';
    return (
	<div className="container">
	  <h1 className={`my-3 text-${textSwitch}`}>About Us</h1>
          <div className="accordion">
	    <div className={`accordion-item bg-${backgroundSwitch}`}>
	      <h2 className="accordion-header" id="headingOne">
		<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"  >
                  Analyze your text
		</button>
	      </h2>
	      <div id="collapseOne" className={`accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample`}>
		<div className={`accordion-body my-3`} >
                  Mus mauris vitae ultricies leo integer malesuada? Morbi leo urna, molestie at elementum eu, facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat? Erat imperdiet sed euismod nisi porta lorem mollis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa, eget egestas purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae, auctor eu augue ut lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc? Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum, odio eu feugiat pretium, nibh ipsum consequat.
		</div>
	      </div>
	      <div className={`accordion-item bg-${backgroundSwitch}`}>
	        <h2 className="accordion-header" id="headingTwo">
		  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  >
                    Free to use
		  </button>
	        </h2>
	        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
		  <div className={`accordion-body my-3`} >
                    Nisi, vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra? Nibh cras pulvinar mattis nunc, sed blandit. Nunc mi ipsum, faucibus vitae aliquet nec, ullamcorper. Luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo? Consectetur a erat nam at lectus urna duis convallis convallis tellus, id interdum velit laoreet id donec ultrices tincidunt. Neque convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis. Enim tortor, at auctor urna nunc id cursus metus aliquam eleifend mi in nulla?
		  </div>
	        </div>
	      </div>
	      <div className={`accordion-item bg-${backgroundSwitch}`}>
	        <h2 className="accordion-header" id="headingThree">
		  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
		  </button>
	        </h2>
	        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
		  <div className={`accordion-body my-3`} >
                    Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero, id faucibus? Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst. Vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend! Eget gravida cum sociis natoque penatibus et magnis dis.
		  </div>
	        </div>
	      </div>
            </div>
	  </div>
	</div>
    );
}
