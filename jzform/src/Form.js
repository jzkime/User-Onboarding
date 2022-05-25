import React from 'react'

export default function Form(props) {
    const { values, change, submit } = props

    const onChange = (evt) => {
        const { name, type, value, checked } = evt.target

        const wantVal = type === 'checkbox' ? checked : value;
        change(name, wantVal)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <section className='form-container' >

            <form onSubmit={onSubmit} >
                <div className='input-container'>
                    <label> First Name&nbsp; 
                        <input name='first_name' value={values.first_name} type='text' onChange={onChange} />
                    </label>
                    <label> Last Name&nbsp; 
                        <input name='last_name' value={values.last_name} type='text' onChange={onChange}/>
                    </label>
                    <label> Email&nbsp; 
                        <input name='email' value={values.email} type='text' onChange={onChange}/>
                    </label>
                </div>

            <div className='terms-service-container'>
                <div className='terms-service'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Tortor condimentum lacinia quis vel. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Luctus accumsan tortor posuere ac ut consequat. Massa tincidunt nunc pulvinar sapien et ligula. Elit eget gravida cum sociis. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Egestas sed sed risus pretium quam vulputate dignissim. Magna ac placerat vestibulum lectus mauris ultrices. <br/> </p>
                    <p>Ac ut consequat semper viverra nam libero justo laoreet sit. Rhoncus urna neque viverra justo nec ultrices dui. Lobortis feugiat vivamus at augue eget. Etiam dignissim diam quis enim. Ut tellus elementum sagittis vitae. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae tempus quam pellentesque nec nam. Donec adipiscing tristique risus nec. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nisl purus in mollis nunc sed. Etiam erat velit scelerisque in dictum non consectetur a. Felis eget nunc lobortis mattis. Massa tempor nec feugiat nisl pretium. In nibh mauris cursus mattis molestie a iaculis at. Ut tellus elementum sagittis vitae et leo duis ut. At in tellus integer feugiat scelerisque varius morbi enim nunc. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet nulla malesuada pellentesque elit eget gravida cum.</p>
                    <p>Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Sed viverra ipsum nunc aliquet bibendum enim. Lectus nulla at volutpat diam ut venenatis. Lacus laoreet non curabitur gravida arcu ac tortor. Vitae nunc sed velit dignissim sodales ut. Sit amet nisl purus in mollis. Pellentesque habitant morbi tristique senectus. Leo integer malesuada nunc vel risus. Ac auctor augue mauris augue neque gravida. Sapien eget mi proin sed. Ut sem nulla pharetra diam sit amet nisl. Cursus turpis massa tincidunt dui ut.</p>
                    <p>Id leo in vitae turpis massa sed elementum. Ullamcorper eget nulla facilisi etiam dignissim. A scelerisque purus semper eget duis at tellus. Volutpat ac tincidunt vitae semper quis. Mi sit amet mauris commodo quis imperdiet massa. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Enim sed faucibus turpis in eu mi bibendum. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nunc sed velit dignissim sodales ut eu sem integer. Ligula ullamcorper malesuada proin libero nunc. Enim diam vulputate ut pharetra sit amet aliquam id. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Aliquet nibh praesent tristique magna sit amet purus gravida. Ipsum faucibus vitae aliquet nec ullamcorper. A scelerisque purus semper eget duis at. Sit amet nisl suscipit adipiscing bibendum. Mi proin sed libero enim sed faucibus. Lorem ipsum dolor sit amet. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
                    <p>Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Iaculis eu non diam phasellus vestibulum lorem sed. Mauris pharetra et ultrices neque. Sed lectus vestibulum mattis ullamcorper velit sed. Lacinia quis vel eros donec ac odio tempor orci. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sem integer vitae justo eget magna fermentum. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Donec ultrices tincidunt arcu non. Donec enim diam vulputate ut. Molestie ac feugiat sed lectus. Dictum sit amet justo donec. Egestas dui id ornare arcu odio ut sem nulla pharetra. Molestie a iaculis at erat pellentesque adipiscing commodo elit.</p>
                    <p>Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut sem viverra aliquet. Massa ultricies mi quis hendrerit dolor magna eget. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Consectetur lorem donec massa sapien. Morbi tempus iaculis urna id volutpat lacus. Tellus mauris a diam maecenas. Ornare lectus sit amet est. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Natoque penatibus et magnis dis parturient montes. Lorem mollis aliquam ut porttitor leo a.</p>
                    <p>Nisl condimentum id venenatis a condimentum vitae sapien. Bibendum neque egestas congue quisque egestas diam in arcu. Ac odio tempor orci dapibus. Sit amet nulla facilisi morbi tempus iaculis urna. Massa id neque aliquam vestibulum morbi blandit cursus risus. Lectus sit amet est placerat in egestas erat imperdiet. Nisl purus in mollis nunc sed. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Metus vulputate eu scelerisque felis imperdiet proin. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Risus ultricies tristique nulla aliquet enim tortor at auctor. Proin nibh nisl condimentum id venenatis a condimentum. Commodo ullamcorper a lacus vestibulum.</p>
                    <p>Sed cras ornare arcu dui vivamus arcu felis bibendum. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ornare massa eget egestas purus viverra accumsan in. Venenatis urna cursus eget nunc scelerisque viverra. Phasellus vestibulum lorem sed risus ultricies. Mauris ultrices eros in cursus. Auctor elit sed vulputate mi. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Id donec ultrices tincidunt arcu non sodales neque sodales. Mauris pharetra et ultrices neque ornare. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. At tellus at urna condimentum mattis pellentesque.</p>
                    <p>Magna ac placerat vestibulum lectus mauris ultrices eros in. Etiam tempor orci eu lobortis elementum nibh. Dolor morbi non arcu risus quis varius. Scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames. Erat imperdiet sed euismod nisi porta lorem. Vitae aliquet nec ullamcorper sit amet risus. Tortor vitae purus faucibus ornare suspendisse. At in tellus integer feugiat scelerisque varius. Porttitor lacus luctus accumsan tortor posuere. Varius morbi enim nunc faucibus a pellentesque sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Et netus et malesuada fames ac turpis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.</p>
                    <p>Nisi quis eleifend quam adipiscing vitae. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Luctus accumsan tortor posuere ac. Platea dictumst vestibulum rhoncus est pellentesque. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu risus quis varius quam quisque id. Vulputate dignissim suspendisse in est ante in nibh mauris. Iaculis eu non diam phasellus vestibulum lorem sed. Ornare lectus sit amet est placerat in egestas erat. Odio eu feugiat pretium nibh ipsum consequat.</p>

                <label>Terms of service&nbsp; 
                    <input name='terms' checked={values.terms} type='checkbox' onChange={onChange} />
                </label>
                </div>
            </div>

            <div className='submit-button'>
                <input type='submit' />
            </div>

            </form>
        </section>
    )
}