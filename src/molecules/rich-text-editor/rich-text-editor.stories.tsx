import { Meta, StoryFn } from '@storybook/react'
import React, { useEffect, useRef, useState } from 'react'

import { Box, Text } from '../../index.js'
import StoryWrapper from '../../utils/story-wrapper.jsx'
import { RichTextEditor } from './rich-text-editor.jsx'

const html = `
<h1>Hello World</h1>
<h2>Some header 2</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel
interdum mattis neque.
</p>
<ol>
<li>interdum mattis neque.</li>
</ol>
<h2>Second level</h2>
<p>
Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus
facilisis. Donec at dignissim dui. Ut et neque nisl.
</p>
<ul>
<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
<li>Ut non enim metus.</li>
</ul>
<a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>
<blockquote>
And here it comes - the quote
</blockquote>
<h5>Header H5</h5>
<p><code>var a = 'asd';</code></p>
<pre>
const a = 1;
const b = 0;

function sum(x, y) {
    return x + y;
}

const c = sum(a, b);</pre>
<p>And below there is a Table</p>
<table>
<thead>
<tr><th>Name</th><th>Surname</th></tr>
</thead>
<tbody>
<tr><td>Wojtek</td><td>Krysiak</td></tr>
<tr><td>Joseph</td><td>Grad</td></tr>
</tbody>
</table>
<p>text goes on...</p>
`

export const Default: StoryFn = () => {
  const [value, setValue] = useState(html)
  const contentRef = useRef<any>()

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = value
    }
  }, [value])

  return (
    <Box flex style={{ gap: 48 }}>
      <StoryWrapper label="Rich text editor">
        <RichTextEditor onChange={(content) => setValue(content)} value={value} />
      </StoryWrapper>
      <StoryWrapper label="Text preview">
        <Text ref={contentRef} />
      </StoryWrapper>
    </Box>
  )
}

const meta: Meta<typeof RichTextEditor> = {
  title: 'DesignSystem/Molecules/RichTextEditor',
  component: RichTextEditor,
}

export default meta
