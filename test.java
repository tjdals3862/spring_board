public class BoardWriteServlet extends HttpServlet {
	Logger logger = Logger.getLogger(BoardWriteServlet.class);
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		logger.info("doGet 호출 성공");
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("BOARD_TITLE", req.getParameter("btitle"));
		pMap.put("BOARD_WRITER", req.getParameter("bwriter"));
		pMap.put("", req.getParameter("bcontent"));
		int result = 0;
		BoardService bs = new BoardService();
		result = bs.insertBoard(pMap);
		if(result == 1) {
			res.sendRedirect("./boardList.bo");
		}else {
			req.setAttribute("message", "게시글 등록 실패");
			RequestDispatcher view = 
			req.getRequestDispatcher("/WEB-INF/views/common/error.jsp");
			view.forward(req, res);
		}
	}		
	public void doPost(HttpServletRequest req, HttpServletResponse res)
			throws ServletException, IOException{
		doGet(req,res);
	}		
}