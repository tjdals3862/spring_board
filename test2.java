public class BoardDao {
	public int insertBoard(Connection conn, Board board) {
		int result =0;
		//Connection con = null;
		PreparedStatement pstmt = null;
		DBConnectionMgr dbMgr = DBConnectionMgr.getInstance();
		StringBuilder sql = new StringBuilder();
		sql.append("INSERT INTO board (BOARD_NUM, BOARD_TITLE, BOARD_WRITER, BOARD_CONTENT, BOARD_DATE)");
		sql.append("VALUES(seq_board.nextval,?,?,?,TO_CHAR(sysdate, 'YYYY-MM-DD'))");
		try {
			//con = dbMgr.getConnection();
      conn.setAutoCommit(true);
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, board.getTitle);
			pstmt.setString(2, board.getWriter);
			pstmt.setString(3, board.getContent);
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			logger.info("Exception : "+e.toString());
		} finally {
			dbMgr.freeConnection(conn, pstmt);
		}
		return result;
	}
}