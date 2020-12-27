<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>价目表</h2>
     <table border="1">
      <tr bgcolor="#9acd32">
        <th>Title</th>
        <th>Country</th>
        <th>Price</th>
        <th>Introduce</th>
      </tr>
      <xsl:for-each select="catalog/cd">
      <xsl:sort select="artist"/>
      <tr>
        <td><xsl:value-of select="title"/></td>
        <td><xsl:value-of select="country"/></td>
        <td><xsl:value-of select="price"/></td>
        <td><xsl:value-of select="introduce"/></td>
      </tr>
      </xsl:for-each>
    </table>
	<a href="http://localhost:9908">返回</a>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
