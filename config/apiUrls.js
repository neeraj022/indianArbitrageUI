import config from './index'
export default {
    loginApi: '/v1/api/login',
    // changeOrForgotPassword: '/v1/api/changeOrForgotPassword',
    changeOrForgotPassword: '/v1/api/changePassword',
    ForgotPassword: '/v1/api/forgotPassword',
    sendOTP: '/v1/api/sendOtp',
    signUp: '/v1/public/register',
    initiateUserPayment: '/v1/public/initiatePayment',
    gradeChange: '/v1/api/gradeChange',
    initiateUserPaymentConfirmation: '/v1/public/paymentConfirmation',
    logout(userId,deviceId){return `/v1/api/logout?userId=${userId}&deviceId=${deviceId}`},
    userDetails: `/v1/api/user/details/`,
    getCountries(){return  `/v1/api/getCountries?active=true`},
    getCities(){return  `/v1/api/cities`},
    getSchools(){return  `/v1/api/schools`},
    getSubscriptionPlan({lang, country='Kazakhstan', promocode, selectedUser}){return  `/v1/public/subscriptionPlans?lang=${lang}&country=${country}&promoCode=${promocode}&role=${selectedUser}`},
    getPromoCodeInfo(promocode){return  `/v1/api/getCouponDetails?code=${promocode}`},
    validateReferralCode(referral_code){return  `/v1/public/validateReferralCode?code=${referral_code}`},
    getCurriculum(gradeId) { return `/v1/api/content/curriculum?gradeId=${gradeId}` },
    getCurriculumStructure(id) { return `/v1/api/content/nextLevel?id=${id}` },
    linkContent: '/v1/api/content/linkContent',
    getLinkedContent(id, page = 0) { return `/v1/api/content/linkedContent?id=${id}&size=100&page=${page}` },
    contentUpload: `/v1/api/content/upsert`,
    userDeactivation: `/v1/api/deactivate`,
    userActivation: `/v1/api/activate`,
    fetchContent: `/v1/api/content/get?size=1000`,
    fetchContentByType : (page, size, grade, type, lrsContent = false) => `/v1/api/content/contentByGradeAndType?page=${page}&size=${size}&grade=${grade}&type=${type}&lrsContent=${lrsContent}`,
    grades: `/v1/api/content/grades`,
    languages(){return `/v1/api/getLanguages`} ,
    updateBio(){return `/v1/api/updateLanguageAndBio`},
    getThemes(){return `/v1/api/theme`},
    validatePromoCode(promoCode, email, number){return `/v1/public/validatePromoCode?promoCode=${promoCode}&email=${email}&phone=${number}`},
    updateTheme: `/v1/api/theme`,
    urlToGetSignedUrl(language = 'en', filename = 'myFile') {
        filename = filename + (new Date().getTime())
        return `/v1/api/content/getContentUploadUrl?lang=${language}&name=${filename}`
    },
    // POST COMMENT LIKE
    addPost (isProfile) {
        if (isProfile) {
            return `v2/api/userWallPost`
        } else {
            return `/v2/api/userPost`
        }

    } ,
    userReportAbuse: `v2/api/abuse/report`,
    onboardingProfilePic: `/v1/api/updateProfilePic `,
    sharePost: `/v2/api/share`,
    fetchPost(offset = 0, page = 10, userId, isWallPost) {
        if (isWallPost) {
            return `/v2/api/getWallPosts?offset=${offset}&userId=${userId}`
        } else if (userId) {
            return `/v2/api/userMyPosts?offset=${offset}&userId=${userId}`
        } else {
            return `/v2/api/userPost?offset=${offset}`
        }
    },
    fetchNotificationPost (postId) {
        return `/v2/api/notificationPost/${postId}`
    },
    updatePost(postId) {
        return `/v2/api/userPostData/${postId}`
    },
    deletePost(postId) {
        return `/v2/api/userPost/${postId}`
    },
    addComment: `/v2/api/comment`,
    fetchComment(discussionId, type = 'POST', page = 0, size = 100) {
        return `/v2/api/comment/${discussionId}?type=${type}&page=${page}&size=${size}`
    },
    updateComment(commentId) {
        return `/v2/api/comment/${commentId}`
    },
    deleteComment(commentId) {
        return `/v2/api/comment/${commentId}`
    },
    likePost: `/v2/api/likes`,
    fetchLike(likeTypeId, type = 'POST', page = 0, size = 100) {
        return `/v2/api/likes/${likeTypeId}?type=${type}&page=${page}&size=${size}`
    },
    getContent(contentId) {
        return `/v1/api/content/get/${contentId}`
    },
    deleteLike(postId, type = "POST") {
        return `/v2/api/likes/${postId}/${type}`
    },
    getUsers(query) {
        return `/v1/api/search/searchBuddies/?q=${query}&page=0&size=10`
    },
    getTaggedUsers(query) {
        return `/v1/api/search/searchTagBuddies/?q=${query}&page=0&size=10`
    },
    setRatings: `/v1/api/rateContent`,
    // e reader
    getBookmarks: (contentId, lang = "en") => `/v1/api/bookmark/${contentId}/${lang}`,
    getLikedContents: `/v1/api/contentlist?page=0&size=100`,
    addBookmark: '/v1/api/bookmark/add',
    deleteBookmark: `/v1/api/bookmark/delete`,

    // study api's
    getCurriculumLevels({id, curriculumId, topic, similar}) {
        if (curriculumId) {
            if (topic && similar) {
                return `/v1/api/content/getCurriculumForParent/?id=${id}&curriculumId=${curriculumId}&topic=${topic}&similar=${similar}`
            } else if (topic) {
                return `/v1/api/content/getCurriculumForParent/?id=${id}&curriculumId=${curriculumId}&topic=${topic}`
            } else if (similar) {
                return `/v1/api/content/getCurriculumForParent/?id=${id}&curriculumId=${curriculumId}&similar=${similar}`
            } else {
                return `/v1/api/content/getCurriculumForParent/?id=${id}&curriculumId=${curriculumId}`
            }
        } else {
            return `/v1/api/content/getCurriculumForParent/?id=${id}&topic=${topic}`
        }
    },
    userConnection: `/v1/api/search/searchBuddies?`,
    fetchConnections(page = 0, size = 100) {
        return `/v1/api/search/searchBuddies?page=${page}&size=${size}`
    },
    userSentConnection: `/v1/api/search/searchBuddyReqSent?`,
    fetchSentConnections(page = 0, size = 100) {
        return `/v1/api/search/searchBuddyReqSent?page=${page}&size=${size}`
    },
    userReceivedConnection: `/v1/api/search/searchBuddyReqReceived?`,
    fetchReceivedConnections(page = 0, size = 100) {
        return `/v1/api/search/searchBuddyReqReceived?page=${page}&size=${size}`
    },
    userSearchedConnection: `/v1/api/search/searchUsers?`,
    fetchSearchedConnections(page = 0, size = 100, searchParam ,gradeParam, schoolParam) {
        return `/v1/api/search/searchUsers?q=${searchParam}&gradeFilter=${gradeParam}&schoolFilter=${schoolParam}&page=${page}&size=${size}`
    },
    userMybuddySearchedConnection: `/v1/api/search/searchBuddies?`,
    fetchMybuddySearchedConnections(page = 0, size = 100, searchParam) {
        return `/v1/api/search/searchBuddies?q=${searchParam}&page=${page}&size=${size}`
    },
    fetchMyBlockedBuddyConnections() {
        return `/v1/api/connection/getAllBlockUsers`
    },
    userConnectionAccept: `/v1/api/connection/approve`,
    userConnectionSend: `/v1/api/connection/send`,
    userConnectionDecline: `/v1/api/connection/reject`,
    userConnectionCancel: `/v1/api/connection/withdraw`,
    unfrienUser: `/v1/api/connection/unfriend`,
    unblockUser(userparam){
      return `/v1/api/connection/unblockUser?userId=${userparam}`
    },
    blockUser(userparam){
      return `/v1/api/connection/blockUser?userId=${userparam}`
    },
    getAnnotations: (contentId) => `/v1/api/annotations/search?contentId=${contentId}`,

    // Note apis
    fetchSavedNotes (page = 0, size = 100) {
      return `/v1/api/note/saved/?page=${page}&size=${size}`
    },
    fetchSavedNoteTags:`/v1/api/userTags`,
    filterNotesByTags(queryTaggedData){return `/v1/api/note/savedwithtags?tag=${queryTaggedData}`},
    usersSubjectTags (tagParams) {
      return `/v1/api/tags?query=${tagParams}`
    },
    createNote: `/v1/api/note`,
    inviteFriend: `/v1/api/referFriend`,
    feedback: `/v1/api/feedback`,
    deleteNote: `/v1/api/note/delete`,
    contentBookmarks: `/v1/api/addToLibrary`,
    phoneVerification: `/v1/api/sendOtp`,
    principalVerification(principal) {
      return `/v1/public/exist/${principal}`
    },
    otpVerification: `/v1/api/validateOtp`,
    userProfileUpdateurl: `/v1/api/updateProfileInfo`,
    deleteBookmarks() {
      return `/v1/api/removeFromLibrary`
    },
    getBookmarkedData(page = 0, size = 100){return `/v1/api/getUserLibrary?page=${page}&size=${size}`},
    postLMS: `/v1/api/lrs`,
    dislike: `/v1/api/dislike`,
    getRecentContent(page = 0, size = 100){return `/v1/api/contentlist?page=${page}&size=${size}`},
    notificationPolling({page=0, size=10, query}) {
        if(query) {
            return `/v1/notification/get/?page=${page}&size=${size}&query=LATEST`
        } else {
            return `/v1/notification/get/?page=${page}&size=${size}`
        }
    },
    notificationBellClick: `/v1/notification/bellIcon`,
    markNotificationRead: `/v1/notification/mark`,
    updatePrivacy: `/v1/api/privacy`,
    getProfileSetting(userId){
      if(userId !== undefined){
        return `/v1/api/getProfileSettings?userId=${userId}`
      }else{
        return `/v1/api/getProfileSettings`
      }
    },
    // getProfileSetting:`/v1/api/getProfileSettings`,
    getProfileBuddies (userId) {
        return `/v1/api/search/searchUserBuddies?userIdInProfile=${userId}`
    },
    getMySubscription () {
        return `/v1/api/mySubscriptions`
    },
    getProfileSettingFullUrl: config.LMS_HOST + `/v1/api/getProfileSettings`,
    getUserProfile (userId) {
        return `/v2/api/getUserProfile?userId=${userId}`
    },
    updateProfile: `/v1/api/updateProfileSettings`,
    updateProfilePic: `/v1/api/updateProfilePic`,
    getLastPics: `/v1/api/lastPics`,
    urlToGetSignedUrl (language = 'en', filename = 'myFile') {
        filename = filename + (new Date().getTime())
        return `/v1/api/content/getContentUploadUrl?lang=${language}&name=${filename}`
    },
    contentSearch (type, q, page, size) {
        return `/v1/api/search/searchContent?type=${type}&q=${q}&page=${page}&size=${size}`
    },
    contentAutoComplete (q, page, size) {
        return `/v1/api/search/searchAutoCompleteContent?q=${q}&page=${page}&size=${size}`
    },

    //My progress
    lrsGetTotalPointsAndCoinsURL(p){
        return `/v1/api/lrsGetTotalPointsAndCoins?durationType=${p.duration}&pageNo=${p.page}&size=${p.size}&subjectId=${p.subjectId}`
    },
    lrsGetTotalTimeSpentURL(p){
        return `/v1/api/lrsGetTotalTimeSpent?durationType=${p.duration}&pageNo=${p.page}&size=${p.size}&subjectId=${p.subjectId}`
    },
    getScoreBoard(p){
        return `/v1/api/lrsGetUserRankForTimePeriod?durationType=${p.duration}&subjectId=${p.subjectId}&role=${p.role}&currentProfileUserId=${p.userId}`
    },
    getScoreBoardSubjects(p){
        return `/v1/api/getUserAchievementPerSubject?durationType=${p.duration}&role=${p.role}&currentProfileUserId=${p.userId}`
    },

    getScoreBoardLastThreeTenure(p){
        if (p.type === 'earned') {
            return `/v1/api/lrsGetPointsAndCoinsLastThreeTenure?durationType=${p.duration}`
        } else {
            return `/v1/api/lrsGetPointsAndCoinsSpentLastThreeTenure?durationType=${p.duration}`
        }
    },
    getScoreBoardUserCoins(p){
        return `/v1/api/lrsGetTotalPointsAndCoinsOfUser`
    },
    getUserGrades: `/v1/api/content/userGrades`,

    //redemption apis
    viewRedemptions ({type, subType}) {
        if (subType) {
            return `/v1/api/viewAllRedemption?type=${type}&subtype=${subType}`
        } else {
            return `/v1/api/viewAllRedemption?type=${type}`
        }
    },
    redeem: `/v1/api/redeem`,
    useAccessory: `/v1/api/useAccessory`,
    removeAccessory: `/v1/api/removeAccessory`,
    viewGift ({giftId}) {
        return `/v1/api/viewGift?giftId=${giftId}`
    },
    previewMascot (id) {
        return `/v1/api/viewMascot?id=${id}`
    },
    applicationProperties: `/v1/admin/getApplicationProperties`,
    purgeDownload: `/v1/api/purgeDownload`,
    similarContentUrl (requestObj) {
        return `v1/api/analytics/similar/${requestObj.id}/${requestObj.level}/${requestObj.type}`
    }

}
