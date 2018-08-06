CREATE DEFINER=`root`@`localhost` PROCEDURE `blog_add`(
IN p_Id varchar(128),
IN p_Title varchar(50),
IN p_Content longtext,
IN p_Date varchar(20),
IN p_Tags varchar(100)
)
BEGIN
	insert into blog.blog values (p_Id,p_Title,p_Content,p_Date,p_Tags);
END



===================================
**
===================================
CREATE DEFINER=`root`@`localhost` PROCEDURE `blog_getBlogList`(
IN p_Title longtext,
IN p_CurrentPage int,
IN p_PageSize int
)
BEGIN
	select Id,Title,Date,Tags
    from blog.blog
    where (Title LIKE  concat(concat(  '%',p_Title ), '%' ))
    LIMIT p_CurrentPage, p_PageSize;
END

